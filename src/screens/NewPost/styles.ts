import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 255px;
`;

export const ContainerForm = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: 300px;
`;

export const InputType = styled.TextInput`
  margin: 10px 0;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonSendContainer = styled.View`
  margin-top: 15px;
`;

export const ButtonSend = styled.TouchableOpacity<{ outline?: boolean }>`
  background-color: ${(props) => (props.outline ? 'transparent' : '#00B37E')};
  border-width: ${(props) => (props.outline ? '1px' : '0')};
  border-color: ${(props) => (props.outline ? '#00B37E' : 'transparent')};
  border-radius: 10px;

  padding: 10px 15px;
  margin: 10px 0;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const FlatListContainer = styled.View`
  height: 100%;
  margin-top: 250px;
  margin-top: 250px;
  width: 90%;
`;
