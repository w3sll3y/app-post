import * as Styled from './styles';

import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import logoImg from '../../assets/logo.png';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Toast from 'react-native-toast-message';

export function Profile() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  async function loggout() {
    const storedUsername = await AsyncStorage.getItem('token');
    const newToken = JSON.parse(storedUsername)?.token;

    try {
      const apiUrl = 'http://192.168.0.26/api_post/login/logout';
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'okhttp/4.9.2',
        'Accept': 'application/json, text/plain, */*',
        'Connection': 'Keep-Alive',
      };

      const data = {
        token: newToken,
      };
      const response = await axios.post(apiUrl, data, { headers });

      if (response?.data?.tipo === "sucesso") {
        navigation.navigate('login');
        AsyncStorage.removeItem('token');
      }
    } catch (err) {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao deslogar',
        text2: 'Erro. Tente novamente!'
      });
    }
  }


  return (
    <Styled.Container>
      <Header />
      <Styled.ButtonSend outline onPress={loggout}>
        <Styled.TitleButton>
          Logout
        </Styled.TitleButton>
      </Styled.ButtonSend>
      <Menu />
    </Styled.Container>
  );
};
