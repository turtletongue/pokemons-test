export type Result<T, E> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: E };

export interface IPokemon {
  id: string | number;
  name: string;
  imageUrl: string;
  height: number;
  attack: number | null;
}

export interface IGetPokemonsOptions {
  limit?: number;
  offset?: number;
}
