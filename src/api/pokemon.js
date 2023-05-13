import axios from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2';
const MAX_POKE_ID = 151;

const getPokes = async (params = {}) => {
  try {
    const url = BASE_URL + '/pokemon';
    const response = await axios.get(url, { params });
    const { status, data } = response || {};
    if (status === 200 && data) {
      const { results = [] } = data || {};
      const pokemons = results.map((result = { url: '' }) => {
        const { url } = result;
        const pokeId = url.split('/').at(-2);
        return { ...result, pokeId }
      })
      return { ...data, results: pokemons };
    }
  } catch (error) {
    console.error(error);
  }
}

export { getPokes };
