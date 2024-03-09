import * as Styled from './styles';
import GetUser from "./components/GetUser";
import { useEffect, useState } from "react";
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Post = {
  id: number,
  title: string,
  description: string,
  createdAt: string,
  idAuthor: string | number,
  type: string,
  typeMachine: string
  likes_count: number | string,
}

export default function Post({
  id,
  title,
  description,
  createdAt,
  idAuthor,
  type,
  typeMachine,
  likes_count
}: Post) {
  const [token, setToken] = useState('');
  const [liked, setLiked] = useState(false);
  const [countLiked, setCounLikes] = useState<Number>(Number(likes_count));

  async function getUser() {
    const storedUsername = await AsyncStorage.getItem('token');
    setToken(JSON.parse(storedUsername)?.token);
  }

  async function handleUpdateLikes(numberLikes: number) {
    try {
      const apiUrl = `http://192.168.0.26/api_post/posts/like/${id}`;
      const headers = {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const data = {
        likes_count: String(numberLikes),
      }

      console.log('aqui', String(numberLikes))
      const response = await axios.put(apiUrl, data, { headers });
      console.log('resp', response);
      if (response?.data?.tipo === "sucesso") {
        // showToast();
      }
    } catch (err) {
      return Toast.show({
        type: 'error',
        text1: 'Erro ao curtir',
        text2: 'Tente novamente!'
      });
    }
  }

  function handleLikeUnliked() {
    let totalLikes = Number(countLiked);
    if (liked === false) {
      console.log(liked)
      totalLikes++;
      setCounLikes(totalLikes);
      handleUpdateLikes(totalLikes);
    }
    if (liked === true) {
      console.log(liked)
      totalLikes = totalLikes - 1;
      setCounLikes(totalLikes);
      handleUpdateLikes(totalLikes);
    }
    setLiked(!liked)
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <GetUser id={idAuthor} />
      <Styled.LikedContainer>
        <Styled.LikeTitle>likes: {countLiked}</Styled.LikeTitle>
        <Styled.Liked
          name="like2"
          size={24}
          liked={liked}
          onPress={handleLikeUnliked}
        />
      </Styled.LikedContainer>
    </Styled.Container>
  );
}