import { styled } from '@linaria/react';

export const Body = styled.body`
  background-color: #131313;
  color: #ffffff;
  font-family: var(--font-raleway), sans-serif;
  padding: 6.25rem 9.375rem;

  @media screen and (max-width: 780px) {
    padding: 1rem;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: 61.25rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
`;
