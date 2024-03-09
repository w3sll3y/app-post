import * as Styled from './styles';
import { API_HOST } from '@env';

import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export function SignUp() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  async function handleLogin() {
    navigation.navigate('login');
  }

  async function handleSignUp() {
    if (name === '' && login === '' && password === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preencha os dados',
        text2: '✋Preencha nome, login e senha!'
      });
    }
    try {
      const apiUrl = `${API_HOST}/api_post/usuarios/cadastrar`;
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'okhttp/4.9.2',
        'Accept': 'application/json, text/plain, */*',
        'Connection': 'Keep-Alive',
      };

      const data = {
        nome: name,
        login: login,
        senha: password,
      };

      const response = await axios.post(apiUrl, data, { headers });

      if (response?.data?.tipo === "sucesso") {
        Toast.show({
          type: 'success',
          text1: 'Castro com sucesso',
          text2: 'Castro com sucesso!👋'
        });
        navigation.navigate('login');
      }
    } catch (err) {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao cadastrar',
        text2: 'Tente novamente!'
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
      <Styled.ContainerForm>
        <Styled.InputType
          placeholder='nome*'
          onChangeText={text => setName(text)}
          value={name}
        />
        <Styled.InputType
          placeholder='username*'
          onChangeText={text => setLogin(text)}
          value={login}
        />
        <Styled.InputType
          placeholder='password*'
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Styled.ButtonSendContainer>
          <Styled.ButtonSend onPress={handleSignUp}>
            <Styled.TitleButton>
              SignUp
            </Styled.TitleButton>
          </Styled.ButtonSend>
          <Styled.ButtonSend outline onPress={handleLogin}>
            <Styled.TitleButton>
              Voltar a Login
            </Styled.TitleButton>
          </Styled.ButtonSend>
        </Styled.ButtonSendContainer>
      </Styled.ContainerForm>
    </Styled.Container>
  );
};
