import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokes } from '../../api/pokemon';
import PokeImage from "../../components/PokeImage";
import giftFriends from "../../api/giftFriends";

const Gift = (props = {}) => {
  // const { data } = props;
  const { id } = useParams();
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    const setPokes = async () => {
      const MAX_PAGE_LIMIT = 20;
      const { results } = await getPokes({ limit: MAX_PAGE_LIMIT }) || {};
      setPokemons(results);
    }

    setPokes();
  }, [ id ]);

  const onClickSendGiftBtn = (pokeId) => {
    console.log(pokeId);
    if (!pokeId) {
      return;
    }

    giftFriends().setItem({ pokeId, friendId: id });
  }

  return (
    <div>
      <h2>친구에게 포켓몬 선물하기</h2>
      <ul>
        {
          pokemons.map((pokemon, index) => 
            <li key={index}>
              <span>{ pokemon.name }</span>
              <PokeImage pokeId={pokemon.pokeId} />
              <button type="button" onClick={() => onClickSendGiftBtn(pokemon.pokeId)}>선물하기</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Gift;
