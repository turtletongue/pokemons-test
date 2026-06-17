import { styled } from '@linaria/react';

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: inline-block;
  padding: 0.4375rem;
  border: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Tip = styled.aside`
  display: flex;
  gap: 0.625rem;
`;

export const Span = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
  max-width: 6.95rem;
`;
