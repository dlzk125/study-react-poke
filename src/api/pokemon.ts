import axios, { AxiosResponse } from 'axios';
import { PokeSimpleAPI, PokeAPI, PokeResult } from '../interface/poke';
const BASE_URL: string = 'https://pokeapi.co/api/v2';
const MAX_POKE_ID: number = 151;

const getPokes = async (params = {}): Promise<PokeAPI | object> => {
  const url = BASE_URL + '/pokemon';
  const response: AxiosResponse<PokeSimpleAPI> = await axios.get(url, { params });
  const { status, data } = response || {};
  if (status === 200 && data) {
    const { results = [] }: PokeSimpleAPI = data || {};
    const pokemons: Array<PokeResult> = results.map((result = { name: '', url: '' }) => {
      const { url } = result;
      const pokeId = url.split('/').at(-2) || '';
      return { ...result, pokeId };
    });
    return { ...data, results: pokemons };
  }

  return {};
};

export { getPokes };
