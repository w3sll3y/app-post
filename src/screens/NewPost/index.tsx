import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Styled from './styles';
import Toast from 'react-native-toast-message';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export function NewPost() {
  const platform = Platform.OS;

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Postagem cadastrada',
      text2: 'Postagem cadastrada com sucesso!👋'
    });
  }

  const navigation = useNavigation();
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useState('');

  async function sendPost() {
    if (title === '' || description === '' || type === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preencha os dados',
        text2: '✋Preencha todos os dados obrigadorios!'
      });
    }
    try {
      const apiUrl = 'http://192.168.0.26/api_post/posts/cadastrar/';
      const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const data = {
        idAuthor: id,
        title,
        type,
        description,
        createdAt: new Date(),
        typeMachine: platform
      }

      const response = await axios.post(apiUrl, data, { headers });
      if (response?.data?.tipo === "sucesso") {
        setTitle('');
        setDescription('');
        setType('');
        showToast();
      }
    } catch (err) {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao cadastrar postagem',
        text2: 'Erro. Tente novamente!'
      });
    }
  }

  async function getUser() {
    const storedUsername = await AsyncStorage.getItem('token');
    setID(JSON.parse(storedUsername)?.id);
    setToken(JSON.parse(storedUsername)?.token);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.ContainerForm>
        <Styled.InputType
          placeholder='titulo*'
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <Styled.InputType
          placeholder='tema da postagem*'
          onChangeText={text => setType(text)}
          value={type}
        />
        <Styled.InputType
          placeholder='descricao*'
          onChangeText={text => setDescription(text)}
          value={description}
          maxLength={500}
        />
        <Styled.ButtonSend onPress={sendPost}>
          <Styled.TitleButton>
            Postar
          </Styled.TitleButton>
        </Styled.ButtonSend>
      </Styled.ContainerForm>
      <Menu />
    </Styled.Container>
  );
};
