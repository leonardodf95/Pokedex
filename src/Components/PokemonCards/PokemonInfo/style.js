import styled from "styled-components";


export const InfoCardArea = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 2fr 1fr;
`;

export const PokemonName = styled.div`
  text-transform: uppercase;
  margin: 5px;
  font-weight: 700;
  font-size: 15px;
 
`;

export const PokemonID = styled.div`
  margin: 5px;
  font-weight: 700;
  font-size: 15px;
 
`;

export const PokemonAreaType = styled.div`
`

export const PokemonTypes = styled.span

`
    border: none;
    box-shadow: 2px 2px 2px #000;
    border-radius: 5px;
    padding: 3px;
    margin: 3vh 2px 2px 2px;
    text-transform: uppercase;
    font-weight: 600;
    flex: 2;
    background-color: ${props => props.color};
  
`;
