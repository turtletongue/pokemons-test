import { styled } from '@linaria/react';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  flex: 1;
  padding: 2.75rem;
  height: fit-content;
  background-color: #000000;
  color: #a0a0a0;
`;

export const Preview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 3rem;
`;

export const Image = styled.img`
  margin: 0 auto;
  object-fit: cover;
  max-width: 100%;
  image-rendering: pixelated;
`;

export const Characteristics = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 150%;
`;
