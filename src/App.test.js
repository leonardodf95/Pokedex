import '@testing-library/jest-dom';
import {render, screen, waitFor, FindAllBy} from '@testing-library/react'
import {findAll, find} from 'styled-components/test-utils'
import App from './App'
import {Card} from './Components/PokemonCards/style';


test('Must have a Pokedex title', () => {
    render(<App/>)
    const PageText = screen.getAllByText('Pokedex')

    expect(PageText).toBeTruthy()
})

test(`Must have a input with place holder 'Buscar pokemons'`, ()=>{
    render(<App/>)

    expect(screen.findAllByPlaceholderText('Buscar Pokemon')).toBeTruthy()
})

test('Options of pagination', async ()=>{
    render(<App/>)
    await screen.findAllByRole('option')
    const options = screen.getAllByRole('option', {hidden: true}) 
    expect(options).toHaveLength(49)
})

test('Cards pokemon', async ()=>{
    render(<App/>)
    await screen.findAllByRole('button',{ name:'Pokemon-card'})
    const cards = screen.getAllByRole('button', {name: 'Pokemon-card'})
    expect(cards).toHaveLength(24)
})