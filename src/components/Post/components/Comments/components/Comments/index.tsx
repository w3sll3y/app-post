import * as Styled from './styles';

export default function CommentsComponent(props) {
  return (
    <Styled.Container>
      <Styled.Content>
        {props?.data?.content}
      </Styled.Content>
      <Styled.Title>
        {props?.data?.createdBy}
      </Styled.Title>
    </Styled.Container>
  )
}