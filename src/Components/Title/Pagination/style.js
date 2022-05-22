import styled from 'styled-components'
import * as c from '../../../Defaults/Colors'

export const PaginationDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px 0 15px;
    
    
    & span {
        color: ${c.MY_SIN};
        font-weight: 500;
    }
`

export const PageSelect = styled.select`
    border: none;
    margin: 0 5px 0 5px;
    border-radius: 5px;
    height: 25px;
    width: 110px;
    font-size: 20px;
    font-family: monospace;
    background-color: #263238;
    color: ${c.MY_SIN};
    cursor: pointer;
    
`

export const PageNext = styled.button`
    
    background-color: ${c.AZURE};
    border: none;
    border-radius: 50%;
    color: ${c.MY_SIN};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    height: 20px;
    transition: .15s transform ease;
    transform: scale(1);
    width: 20px;
    &:hover {
        transform: scale(1.2);
    }
`

export const PreviouslyPage = styled.button`
    
    border: none;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${c.AZURE};
    color: ${c.MY_SIN};
    font-weight: 600;
    margin: 0 0 0 5px;
    font-size: 18px;
    cursor: pointer;
    transition: .15s transform ease;
    transform: scale(1);
    &:hover {
        transform: scale(1.2);
    }
`