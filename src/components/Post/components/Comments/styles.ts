import styled from "styled-components/native";

export const ContainerModal = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.View`
  margin-top: 10px;
  width: 90%;
  background-color: #C4C4CC;
  border-radius: 25px;
  position: relative;
  height: 550px;
`;

export const CloseContainer = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const Title = styled.Text`
  font-style: italic;
  text-align: center;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const FlatListContainer = styled.View`
  height: 350px;
  max-height: 350px;
  margin-top: 15px;
`;

export const CommentContainer = styled.View`
  max-width: 100%;
  padding: 0 5%;
  align-content: center;
  justify-content: center;
`;

export const InputType = styled.TextInput`
  margin: 10px 0;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
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