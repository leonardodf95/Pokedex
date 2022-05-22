import styled from 'styled-components'

export const Area = styled.div`
    @media (min-width: 1500px)
    {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    margin: 10px;
    }
    @media (max-width: 1499px)
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        margin: 10px;
    }
    @media (max-width: 1049px)
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 10px;
        justify-items: center;
    }
    @media (max-width: 789px)
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 10px;
        justify-items: center;
    }
    @media (max-width: 533px)
    {
        display: grid;
        grid-template-columns: 1fr;
        margin: 10px;
        justify-items: center;
    }
`