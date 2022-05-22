import { InfoCardArea, PokemonAreaType, PokemonID, PokemonName, PokemonTypes } from "./style"
import * as c from '../../../Defaults/Colors'

const PokemonInfo = ({ pokemon }) => {
    
    const color = (types) => {
        
        let color;
        switch (types.type.name){
            case 'fire':
                color = c.FIRE;
                break;
            case 'water':
                color = c.WATER;
                break;
            case 'grass':
                color = c.GRASS;
                break;
            case 'flying':
                color = c.FLYNG;
                break;
            case 'fighting':
                color = c.FIGHTING;
                break;
            case 'poison':
                color = c.POISON;
                break;
            case 'electric':
                color = c.ELETRIC;
                break;
            case 'ground':
                color = c.GROUND;
                break;
            case 'rock':
                color = c.ROCK;
                break;
            case 'psychic':
                color = c.PSYCHIC;
                break;
            case 'ice':
                color = c.ICE;
                break;
            case 'bug':
                color = c.BUG;
                break;
            case 'ghost':
                color = c.GHOST;
                break;
            case 'steel':
                color = c.STEEL;
                break;
            case 'dragon':
                color = c.DRAGON;
                break;
            case 'dark':
                color = c.DARK;
                break;
            case 'fairy':
                color = c.FAIRY;
                break;
            default:
                color = 'white';
        }
        
        return color;
    }
    

    return (
    <InfoCardArea>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonID>#{pokemon.id}</PokemonID>
        <PokemonAreaType>
        {pokemon.types.map((types) => <PokemonTypes color={color(types)} key={types.slot}>{types.type.name}</PokemonTypes>)}
        </PokemonAreaType>
    </InfoCardArea>
)
}

export default PokemonInfo