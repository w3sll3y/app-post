import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import * as Styled from './styles';
import Toast from "react-native-toast-message";

export default function GetUser({ id }: number) {
  const [token, setToken] = useState('');
  const [dataPosts, setDataPosts] = useState([]);

  async function getPosts() {
    try {
      const apiUrl = `http://192.168.0.26/api_post/usuarios/listar/${id}`;
      const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(apiUrl, { headers });
      if (response?.data?.tipo === "sucesso") {
        setDataPosts(response?.data?.resposta);
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
    getPosts();
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <Styled.Container>
      <Styled.Title>
        autor: {dataPosts?.nome}
      </Styled.Title>
    </Styled.Container>
  )
}