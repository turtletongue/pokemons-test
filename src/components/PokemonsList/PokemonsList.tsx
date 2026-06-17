import { useState, type ImgHTMLAttributes } from 'react';

import type { IPokemon } from '@/api/types';
import { Chip } from '@/components/Chip';
import { Card } from '@/components/Card';
import { List, Section } from './PokemonsList.styled';

interface Props {
  pokemons: IPokemon[];
  imageOptimizations: Record<string, ImgHTMLAttributes<HTMLImageElement>>;
}

export function PokemonsList({ pokemons, imageOptimizations }: Props) {
  const [pokemon, setPokemon] = useState<IPokemon | null>(pokemons[0] ?? null);

  return (
    <Section>
      <List>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Chip onClick={() => setPokemon(pokemon)}>{pokemon.name}</Chip>
          </li>
        ))}
      </List>
      {pokemon && (
        <Card
          pokemon={pokemon}
          imageAttributes={imageOptimizations[pokemon.imageUrl]}
        />
      )}
    </Section>
  );
}
