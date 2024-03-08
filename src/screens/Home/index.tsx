import * as Styled from './styles';

import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Menu from '../../components/Menu';
import logoImg from '../../assets/logo.png';

export function Home() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  async function teste() {
    const storedUsername = await AsyncStorage.getItem('token');
    console.log(JSON.parse(storedUsername)?.token);
    setToken(JSON.parse(storedUsername)?.token);
  }

  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
      <Styled.ButtonSend onPress={teste}>
        <Styled.TitleButton>
          HOMEs
        </Styled.TitleButton>
      </Styled.ButtonSend>
      <Menu />
    </Styled.Container>
  );
};
