import giftFriends from "../../api/giftFriends";
import PokeImage from "../../components/PokeImage";

const MyPage = () => {
  const pokemons = giftFriends().getList() || [];
  return (
    <ul>
      {
        pokemons.map((pokemon, index) => 
          <li key={index}>
            <span>{ pokemon.name }</span>
            <PokeImage pokeId={pokemon.pokeId} />
          </li>
        )
      }
    </ul>
  )
}

export default MyPage;
