import styled from 'styled-components'

export const Area = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    height: auto;
    width: 100vw;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    box-shadow: 0 6px 3px rgba(0,0,0,0.5);
    @media (max-width: 650px)
    {
        display: flex;
        flex-wrap: wrap;
    }
`

export const Tytle = styled.h1`
    text-align: center;
    font-size: 40px;
    padding: 0;
    margin: 0 0 20px 20px;
    color: #feca1b;
    text-shadow: 0 0 10px rgba(55, 97, 168, 1);
    font-family: monospace;

`