import React from 'react';
import giftFriends from '../../api/giftFriends';
import PokeImage from '../../components/PokeImage';
import { MyPoke } from '../../interface/poke';

const MyPage: React.FC = () => {
  const pokemons: MyPoke[] = giftFriends().getList() || [];
  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          <span>{pokemon.name}</span>
          <PokeImage pokeId={pokemon.pokeId} />
        </li>
      ))}
    </ul>
  );
};

export default MyPage;
