import * as Styled from './styles';
import { useNavigation } from "@react-navigation/native";

import logoImg from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Header() {
  const [name, setName] = useState('');

  async function getUser() {
    const storedUsername = await AsyncStorage.getItem('token');
    setName(JSON.parse(storedUsername)?.name);
  }

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home');
  }

  function handleGoProfile() {
    navigation.navigate('profile');
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Styled.Container>
      <Styled.ContainerIcon>
        <Styled.Logo source={logoImg} />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon>
        <Styled.Title>Olá {name} </Styled.Title>
      </Styled.ContainerIcon>
    </Styled.Container>
  )
}