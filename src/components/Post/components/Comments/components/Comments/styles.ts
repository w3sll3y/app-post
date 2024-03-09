import styled from "styled-components/native";

export const Container = styled.View`
  margin: 10px;
  background-color: #202024;
  width: 90%;
  border-radius: 5px;
  justify-content: center;
  padding: 5px;
  position: relative;
  height: 50px;
`;

export const CloseContainer = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const Content = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const Title = styled.Text`
  font-style: italic;
  color: #fff;
  margin-top: 5PX;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
`;

