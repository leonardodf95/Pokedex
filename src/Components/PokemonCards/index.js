import { Card, PokemonPhoto } from "./style"
import PropTypes from 'prop-types'
import PokemonInfo from "./PokemonInfo"
import * as c from '../../Defaults/Colors'

const PokemonCard = ( { pokemon }) => {
    
    const setColorCard = () => {
        const typeSlot1 = pokemon.types[0].type.name;
        let color;
        switch (typeSlot1){
            case 'fire':
                color = c.FIRE_CARD;
                break;
            case 'water':
                color = c.WATER_CARD;
                break;
            case 'grass':
                color = c.GRASS_CARD;
                break;
            case 'flying':
                color = c.FLYNG_CARD;
                break;
            case 'fighting':
                color = c.FIGHTING_CARD;
                break;
            case 'poison':
                color = c.POISON_CARD;
                break;
            case 'electric':
                color = c.ELETRIC_CARD;
                break;
            case 'ground':
                color = c.GROUND_CARD;
                break;
            case 'rock':
                color = c.ROCK_CARD;
                break;
            case 'psychic':
                color = c.PSYCHIC_CARD;
                break;
            case 'ice':
                color = c.ICE_CARD;
                break;
            case 'bug':
                color = c.BUG_CARD;
                break;
            case 'ghost':
                color = c.GHOST_CARD;
                break;
            case 'steel':
                color = c.STEEL_CARD;
                break;
            case 'dragon':
                color = c.DRAGON_CARD;
                break;
            case 'dark':
                color = c.DARK_CARD;
                break;
            case 'fairy':
                color = c.FAIRY_CARD;
                break;
            default:
                color = 'white';
        }
        return color;
    }
    const color = setColorCard();
    
    return (
        <Card color={color} >
            <PokemonPhoto alt={pokemon.name} src={pokemon.sprites.front_default}/>
            <PokemonInfo pokemon={pokemon}/>
        </Card>
    )
}

Card.propTypes = {
    color: PropTypes.string,
}

export default PokemonCard