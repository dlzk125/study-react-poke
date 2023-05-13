import Image from "./Image";

const PokeMonImage = (props = {}) => {
  const { pokeId, ...otherProps } = props;
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeId}.gif`;
  return (
    <Image
      {...otherProps}
      src={src}
    />
  )
}

export default PokeMonImage;
