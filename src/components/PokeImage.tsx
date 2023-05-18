import React from 'react';
import Image from './Image';

interface Props extends Record<string, any> {
  pokeId: string;
}

const PokeMonImage: React.FC<Props> = (props = { pokeId: '' }) => {
  const { pokeId, ...otherProps } = props;
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeId}.gif`;
  return <Image src={src} {...otherProps} />;
};

export default PokeMonImage;
