import { AntDesign } from '@expo/vector-icons';
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 15px;
  padding: 10px 15px;
  margin: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const CreatedBy = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 10px;
  font-style: italic;
`;

export const Liked = styled(AntDesign) <{ liked?: boolean }>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${(props) => (props.liked ? '#00B37E' : '#202024')};

  margin-top: 10px;
  font-style: italic;
`;

export const LikeTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 10px;
  font-style: italic;
`;

export const LikedContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;