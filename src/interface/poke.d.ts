type pokeId = string;
type friendId = string;

interface PokeResult {
  name: string;
  url: string;
  pokeId: pokeId;
}

interface PokeSimpleAPI {
  count: number;
  next: string;
  previous: string;
  results: Array<Omit<PokeResult, 'pokeId'>>;
}

interface PokeAPI extends PokeSimpleAPI {
  results: Array<PokeResult>;
}

interface MyPoke extends PokeResult {
  friendId: friendId;
}

export type { PokeResult, PokeSimpleAPI, PokeAPI, MyPoke };
