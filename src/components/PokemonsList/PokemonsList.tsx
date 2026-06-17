import { useState, type ImgHTMLAttributes } from 'react';

import type { Result, IPokemon } from '@/api/types';
import { Chip } from '@/components/Chip';
import { Card } from '@/components/Card';
import { ErrorMessage, List, Section } from './PokemonsList.styled';

interface Props {
  pokemons: Result<IPokemon[], Error>;
  imageOptimizations: Record<string, ImgHTMLAttributes<HTMLImageElement>>;
}

export function PokemonsList({ pokemons, imageOptimizations }: Props) {
  const first =
    pokemons.status === 'success' ? (pokemons.data[0] ?? null) : null;
  const [pokemon, setPokemon] = useState<IPokemon | null>(first);

  if (pokemons.status === 'error') {
    return (
      <ErrorMessage>
        Не удалось загрузить список покемонов. Попробуйте перезагрузить
        страницу.
      </ErrorMessage>
    );
  }

  return (
    <Section>
      <List>
        {pokemons.data.map((pokemon) => (
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
