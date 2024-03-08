
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

import logoImg from '../../assets/logo.png';
import Toast from 'react-native-toast-message';

export function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const navigation = useNavigation();

  async function handleGoToSignUp() {
    navigation.navigate('signup');
  }

  async function handleGoToHome() {
    navigation.navigate('home');
  }

  async function handleLogin() {
    if (name === '' || password === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preencha os dados',
        text2: '✋Preencha login e senha!'
      });
    }
    try {
      const apiUrl = 'http://192.168.0.26/api_post/login/login';
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'okhttp/4.9.2',
        'Accept': 'application/json, text/plain, */*',
        'Connection': 'Keep-Alive',
      };

      const data = {
        login: name,
        senha: password,
      };

      const response = await axios.post(apiUrl, data, { headers });

      if (response?.data?.tipo === "sucesso") {
        setUser(response?.data?.resposta?.[1]?.[0]);
        const token = response?.data?.resposta?.[0];
        const id = response?.data?.resposta?.[1]?.[0]?.id;
        const name = response?.data?.resposta?.[1]?.[0]?.nome;
        AsyncStorage.setItem('token', JSON.stringify({ token, id, name }));
        navigation.navigate('home');
      }
    } catch (err) {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao acessar',
        text2: 'Login ou senha invalidos!😔'
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
      <Styled.ContainerForm>
        <Styled.InputType
          placeholder='username*'
          onChangeText={text => setName(text)}
          value={name}
        />
        <Styled.InputType
          placeholder='password*'
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Styled.ButtonSendContainer>
          <Styled.ButtonSend onPress={handleLogin}>
            <Styled.TitleButton>
              Entrar
            </Styled.TitleButton>
          </Styled.ButtonSend>
          <Styled.ButtonSend outline onPress={handleGoToSignUp}>
            <Styled.TitleButton>
              Cadastrar-se
            </Styled.TitleButton>
          </Styled.ButtonSend>
        </Styled.ButtonSendContainer>
      </Styled.ContainerForm>
    </Styled.Container>
  );
};
