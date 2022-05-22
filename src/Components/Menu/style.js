import styled from 'styled-components'
import {MY_SIN} from '../../Defaults/Colors'

export const MenuBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100% 
`

export const ItemMenu = styled.button`
    
    align-items: center;
    background: transparent;
    border: none;
    color: rgba(254, 202, 27, 0.8);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    
    margin: 0 5px 5px 20px;
    padding: 0 0 2px 0;
    text-shadow: 10px 5px 3px rgba(0,0,0, 0.5);
    transition: .15s transform ease;
    transform: scale(1);

    &:hover {
        color: ${MY_SIN};
        transform: scale(1.1);
        border-bottom: 5px solid #3761a8;
    }

    @media (max-width: 500px) {
        font-size: 15px;
        margin: 0 0 5px 10px;
      }
`