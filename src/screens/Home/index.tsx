import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import * as Styled from './styles';
import { API_HOST } from '@env';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Toast from 'react-native-toast-message';

export function Home() {

  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [reHandle, setReHandle] = useState(0);
  const [dataPosts, setDataPosts] = useState([]);
  const homeScreenRef = useRef();

  async function getPosts() {
    try {
      const apiUrl = `${API_HOST}/api_post/posts/listar/`;
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(apiUrl, { headers });
      if (response?.data?.tipo === "sucesso") {
        setDataPosts(response?.data?.resposta);
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar postagens',
        text2: 'Relogue novamente!👋'
      });
    }
  }

  async function getUser() {
    const storedUsername = await AsyncStorage.getItem('token');
    setID(JSON.parse(storedUsername)?.id);
    setName(JSON.parse(storedUsername)?.name);
    setToken(JSON.parse(storedUsername)?.token);
  }

  const handleScreenFocus = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    setReHandle(seconds);
  };

  useFocusEffect(
    useCallback(() => {
      handleScreenFocus();
    }, [])
  );

  useEffect(() => {
    getUser();
    setTimeout(() => {
      setReHandle(1);
    }, 1)
  }, []);

  useEffect(() => {
    getPosts();
  }, [reHandle]);

  return (
    <Styled.Container>
      <Header />
      <Styled.FlatListContainer>
        <FlatList
          style={{ marginBottom: 200 }}
          data={dataPosts}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => (
            <Post
              id={item?.id}
              title={item?.title}
              createdAt={item?.createdAt}
              description={item?.description}
              idAuthor={item?.idAuthor}
              likes_count={item?.likes_count}
              type={item?.type}
              typeMachine={item?.typeMachine}
              key={item?.id}
            />
          )}
        />
      </Styled.FlatListContainer>
      <Menu />
    </Styled.Container>
  );
};
