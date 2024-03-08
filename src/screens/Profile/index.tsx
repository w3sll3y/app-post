import * as Styled from './styles';

import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

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
      console.log('err', err)
    }
  }


  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
      <Styled.ButtonSend>
        <Styled.TitleButton>
          PROFILE
        </Styled.TitleButton>
      </Styled.ButtonSend>
      <Styled.ButtonSend outline onPress={loggout}>
        <Styled.TitleButton>
          Logout
        </Styled.TitleButton>
      </Styled.ButtonSend>
    </Styled.Container>
  );
};
