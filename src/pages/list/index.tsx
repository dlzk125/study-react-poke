import React, { useEffect, useRef, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getPokes } from '../../api/pokemon';
import PokeImage from '../../components/PokeImage';
import { PokeAPI, PokeResult } from '../../interface/poke';
import styles from './_index.module.scss';

const List: React.FC = (props = {}) => {
  // const { data } = props;
  const currPageOffset = 0;
  const MAX_PAGE_LIMIT = 20;
  const observerElem = useRef(null);

  const fetchPokeList = async ({ pageParam = 0 }) => {
    if (pageParam === null) {
      return;
    }

    const response: Partial<PokeAPI> =
      (await getPokes({ offset: pageParam, limit: MAX_PAGE_LIMIT })) || {};
    return response;
  };

  const { data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['pokeList'],
    queryFn: fetchPokeList,
    getNextPageParam: (data = {}) => {
      const { next }: Partial<PokeAPI> = data;
      return next ? currPageOffset + MAX_PAGE_LIMIT : null;
    }
  });

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries;
      console.log('fetch', target);
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element: HTMLElement | null = observerElem.current;
    const option = { threshold: 0, root: null };

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <div>
      <h2>친구에게 포켓몬 선물하기</h2>
      <ul className={styles.list} ref={observerElem}>
        {data?.pages.map((response = {}, i) => (
          <React.Fragment key={i}>
            {response?.results?.map((pokemon, index) => (
              <li key={index} className={styles['list-item']}>
                <span className={styles['list-item-name']}>{pokemon.name}</span>
                <PokeImage pokeId={pokemon.pokeId} className={styles['list-item-img']} />
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default List;
