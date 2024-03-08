import { View, Text } from "react-native";
import * as Styled from './styles';
import GetUser from "./components/GetUser";

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
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <GetUser id={idAuthor} />
    </Styled.Container>
  );
}