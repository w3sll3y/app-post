import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import CommentsComponent from "./components/Comments";
import * as Styled from './styles';
import Toast from "react-native-toast-message";
import { FlatList } from "react-native";

export default function Comments({ id, childToParent, name }: number) {
  const [token, setToken] = useState('');
  const [dataComments, setDataComments] = useState([]);
  const [modal, setModal] = useState(true);
  const [content, setContent] = useState('');

  async function getComments() {
    try {
      const apiUrl = `http://192.168.0.26/api_post/comentario/listar/${id}`;
      const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(apiUrl, { headers });
      if (response?.data?.tipo === "sucesso") {
        setDataComments(response?.data?.resposta);
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar dados do usuario',
        text2: 'Relogue novamente!👋'
      });
    }
  }

  async function newComment() {
    if (content === '') {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao comentar',
        text2: 'Insira seu comentario!👋'
      });
    }
    try {
      const apiUrl = `http://192.168.0.26/api_post/comentario/cadastrar`;
      const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const data = {
        createdBy: name,
        content,
        createdAt: new Date(),
        postId: id
      }

      const response = await axios.post(apiUrl, data, { headers });
      if (response?.data?.tipo === "sucesso") {
        setDataComments(response?.data?.resposta);
        childToParent();
        return Toast.show({
          type: 'success',
          text1: 'Comentario enviado',
          text2: 'Obrigado por comentar!👋'
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar dados do usuario',
        text2: 'Relogue novamente!👋'
      });
    }
  }

  async function getUser() {
    const storedUsername = await AsyncStorage.getItem('token');
    await setToken(JSON.parse(storedUsername)?.token);
    getComments();
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Styled.ContainerModal>
      <Styled.Container>
        <Styled.Title>
          comentários
        </Styled.Title>
        <Styled.CloseContainer>
          <AntDesign name="close" size={28} color="#323238" onPress={childToParent} style={{ zIndex: 1000 }} />
        </Styled.CloseContainer>
        <Styled.FlatListContainer>
          <FlatList
            data={dataComments}
            keyExtractor={item => item?.id}
            renderItem={({ item }) => (
              <CommentsComponent
                data={item}
              />
            )}
          />
        </Styled.FlatListContainer>
        <Styled.CommentContainer>
          <Styled.InputType
            placeholder='conteudo*'
            onChangeText={text => setContent(text)}
            value={content}
          />
          <Styled.ButtonSend onPress={newComment}>
            <Styled.TitleButton>
              comentar
            </Styled.TitleButton>
          </Styled.ButtonSend>
        </Styled.CommentContainer>
      </Styled.Container>
    </Styled.ContainerModal>
  )
}