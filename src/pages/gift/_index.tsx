import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokes } from '../../api/pokemon';
import PokeImage from '../../components/PokeImage';
import giftFriends from '../../api/giftFriends';
import { PokeAPI, PokeResult } from '../../interface/poke';
import Modal from '../../components/Modal';
import styles from './_index.module.scss';

const Gift: React.FC = (props = {}) => {
  // const { data } = props;
  const { id = '' } = useParams();
  const [pokemons, setPokemons] = useState<PokeResult[]>([]);

  useEffect(() => {
    const setPokes = async () => {
      const MAX_PAGE_LIMIT = 20;
      const { results = [] }: Partial<PokeAPI> = (await getPokes({ limit: MAX_PAGE_LIMIT })) || {};
      setPokemons(results);
    };

    setPokes();
  }, [id]);

  const onClickSendGiftBtn = (pokemon: PokeResult) => {
    if (!pokemon) {
      return;
    }

    Modal({ title: '선물하기', text: '포켓몬을 선물하시겠습니까?' })
      .then(() => {
        giftFriends().setItem({ ...pokemon, friendId: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>친구에게 포켓몬 선물하기</h2>
      <ul className={styles.list}>
        {pokemons.map((pokemon, index) => (
          <li key={index} className={styles['list-item']}>
            <span className={styles['list-item-name']}>{pokemon.name}</span>
            <PokeImage pokeId={pokemon.pokeId} className={styles['list-item-img']} />
            <button
              type="button"
              className={styles['list-item-btn']}
              onClick={() => onClickSendGiftBtn(pokemon)}
            >
              선물하기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gift;
