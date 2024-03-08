import * as Styled from './styles';

import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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
      return console.log('precisa preencher os dados');
    }
    try {
      console.log('aquii')
      const apiUrl = 'http://192.168.0.26/api_post/usuarios/cadastrar';
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

      console.log('data===', response)
      if (response?.data?.tipo === "sucesso") {
        navigation.navigate('login');
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
      <Styled.ContainerForm>
        <Styled.InputType
          placeholder='nome'
          onChangeText={text => setName(text)}
          value={name}
        />
        <Styled.InputType
          placeholder='username'
          onChangeText={text => setLogin(text)}
          value={login}
        />
        <Styled.InputType
          placeholder='password'
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
