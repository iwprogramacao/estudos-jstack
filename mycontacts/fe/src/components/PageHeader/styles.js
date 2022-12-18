import styled from 'styled-components';

export const PageHeaderContainer = styled.header`
  margin-bottom: 24px;
  a {
    gap: 8px;
    align-items: center;
    display: flex;
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
  }

  img {
    transform: rotate(-90deg);
  }

  h1 {
    font-size: 24px;
  }
`;
