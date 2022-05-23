import { useContext } from "react";
import PageContext from "../../Contexts/PageContext";
import PokemonCard from "../PokemonCards";
import { Area, LoadingAnimation } from "./style";

const AreaCard = ({ pokemon }) => {

    const { load } = useContext(PageContext)
    return (
        <Area>
        {(load === true)? <LoadingAnimation></LoadingAnimation> : pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
            
        </Area>
    )

}

export default AreaCard;