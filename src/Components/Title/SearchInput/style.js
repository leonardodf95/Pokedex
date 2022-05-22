import styled from 'styled-components'

export const InputSearch = styled.input`
    border: none;
    border-radius: 10px;
    height: 26px;
    margin: 0 0 10px 20px;
    font-size: 18px;
    width: 200px;
`

export const SearchButton = styled.button`
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #feca1b;
    cursor: pointer;
    transition: .15s ease;
    margin: 0 0 10px 5px;
    
    &:hover{
        
        background-color: white;
        color: rgba(55, 97, 168, 1);
    }
`