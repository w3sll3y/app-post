import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;

  align-items: center;
  justify-content: center;
  
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text``;