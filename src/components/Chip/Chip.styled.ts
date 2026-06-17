import { styled } from '@linaria/react';

export const Button = styled.button`
  background-color: #1986ec;
  padding: 1.25rem;
  border-radius: 2.75rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
  color: #ffffff;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #1172cd;
  }
`;
