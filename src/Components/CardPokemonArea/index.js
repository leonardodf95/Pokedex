import PokemonCard from "../PokemonCards";
import { Area } from "./style";

const AreaCard = ({ pokemon }) => {


    return (
        <Area>
            {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </Area>
    )

}

export default AreaCard;