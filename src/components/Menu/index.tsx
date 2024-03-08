import * as Styled from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Menu() {

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home');
  }

  function handleGoNewPost() {
    navigation.navigate('newPost');
  }

  function handleGoProfile() {
    navigation.navigate('profile');
  }

  return (
    <Styled.Container>
      <Styled.ContainerIcon>
        <AntDesign name="home" size={24} color="#323238" onPress={handleGoHome} />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon>
        <MaterialIcons name="note-add" size={24} color="#323238" onPress={handleGoNewPost} />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon>
        <AntDesign name="user" size={24} color="#323238" onPress={handleGoProfile} />
      </Styled.ContainerIcon>
    </Styled.Container>
  )
}