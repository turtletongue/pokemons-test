import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { setupCache } from 'axios-cache-interceptor';

import type { IGetPokemonsOptions, IPokemon, Result } from './types';

const client = axios.create({
  timeout: 5000,
});

axiosRetry(client, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
});

setupCache(client, {
  ttl: Infinity,
  interpretHeader: false,
});

export async function getPokemons({
  limit = 10,
  offset = 0,
}: IGetPokemonsOptions = {}): Promise<Result<IPokemon[], Error>> {
  try {
    const listResponse = await client.get<IPokemonList>(
      `${process.env.PUBLIC_POKEAPI}/pokemon`,
      {
        params: {
          limit,
          offset,
        },
      },
    );

    const list = listResponse.data.results;

    const responses = await Promise.all(
      list.map(({ url }) => client.get<IPokemonResource>(url)),
    );

    return {
      status: 'success',
      data: responses.map(({ data }) => {
        const attackStat = data.stats.find(
          (stat) => stat.stat.name === 'attack',
        );

        return {
          id: data.id,
          name: data.name,
          imageUrl: data.sprites.front_default,
          height: data.height,
          attack: attackStat?.base_stat ?? null,
        };
      }),
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Failed to make API request: ', error);
    } else {
      console.error('Got unknown error: ', error);
    }

    return { status: 'error', error: error as Error };
  }
}

interface IPokemonList {
  results: { url: string }[];
}

interface IPokemonResource {
  id: number;
  name: string;
  height: number;
  stats: IStatsResource[];
  sprites: {
    front_default: string;
  };
}

interface IStatsResource {
  base_stat: number;
  stat: {
    name: string;
  };
}
