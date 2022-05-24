import { useContext } from "react";
import PageContext from "../../Contexts/PageContext";
import PokemonCard from "../PokemonCards";
import { Area, LoadingAnimation, AreaLoading } from "./style";

const AreaCard = ({ pokemon }) => {
  const { load } = useContext(PageContext);
  return (
    <>
      {load === true ? (
        <AreaLoading>
        <LoadingAnimation></LoadingAnimation>
        </AreaLoading>
      ) : (
        <Area>
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </Area>
      )}
    </>
  );
};

export default AreaCard;
