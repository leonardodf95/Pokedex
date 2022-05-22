import styled from 'styled-components'




export const Card = styled.div`
    display: flex;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px #000000;
    margin: 5px;
    cursor: pointer;
    width: 250px;
    height: auto;
    max-height: 90px;
    background-color: ${(props) => props.color};
    transition: .2s transform ease;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
        z-index: 1000;
    }
`
export const PokemonPhoto = styled.img`
    width: 80px;
    height: 80px;
`
