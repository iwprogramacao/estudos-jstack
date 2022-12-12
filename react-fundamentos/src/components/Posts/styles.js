import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 2rem;

  opacity: ${(props) => (props.removed ? 0.5 : 1)};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
