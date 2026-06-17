import type { ImgHTMLAttributes } from 'react';

import type { IPokemon } from '@/api/types';
import { Article, Characteristics, Image, Name, Preview } from './Card.styled';

interface Props {
  pokemon: IPokemon;
  imageAttributes?: ImgHTMLAttributes<HTMLImageElement>;
}

export function Card({ pokemon, imageAttributes }: Props) {
  return (
    <Article>
      <Preview>
        <Name>{pokemon.name}</Name>
        <Image
          src={pokemon.imageUrl}
          alt={`${pokemon.name} спереди`}
          {...imageAttributes}
        />
      </Preview>
      <Characteristics>
        <li>Id: {pokemon.id}</li>
        <li>height: {pokemon.height}</li>
        <li>attack: {pokemon.attack ?? '?'}</li>
      </Characteristics>
    </Article>
  );
}
