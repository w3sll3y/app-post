import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 110px;
  position: absolute;
  top: 0;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ContainerIcon = styled.View`
  margin: 0 15px;
  padding: 0 35px;
  margin-left: 10px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 100px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;