import { styled } from '@linaria/react';

export const Section = styled.section`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
  flex: 1;
  height: fit-content;
`;
