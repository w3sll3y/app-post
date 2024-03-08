import * as Styled from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Menu() {

  const navigation = useNavigation();

  function handleGoProfile() {
    navigation.navigate('profile');
  }
  return (
    <Styled.Container>
      <Styled.Title>MENU</Styled.Title>
      <Styled.Title>MENU</Styled.Title>
      <Styled.Title onPress={handleGoProfile}>PROFILE</Styled.Title>
    </Styled.Container>
  )
}