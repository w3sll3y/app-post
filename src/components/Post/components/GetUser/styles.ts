import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-style: italic;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
`;

