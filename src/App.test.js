import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import App from './App'
import AreaCard from './Components/CardPokemonArea'


test.skip('Must have a Pokedex title', () => {
    render(<App/>)
    const PageText = screen.getAllByText('Pokedex')

    expect(PageText).toBeTruthy()
})

test.skip(`Must have a input with place holder 'Buscar pokemons'`, ()=>{
    render(<App/>)

    expect(screen.findAllByPlaceholderText('Buscar Pokemon')).toBeTruthy()
})

test.skip('Options of pagination', async ()=>{
    render(<App/>)
    await screen.findAllByRole('option')
    const options = screen.getAllByRole('option', {hidden: true}) 
    expect(options).toHaveLength(49)
})



test('Must render one card of pokemon.', async ()=>{
    const pokemons = [{
        name: 'pokemon1',
        id: 1,
        types: [{
            type: {
                name: 'type-name'
            }
        }],
        sprites: {
            front_default:'asdasdasdasd'
        }
    }]

    render(<AreaCard pokemon={pokemons} page={1} loading={false} />)
    await screen.findAllByRole('button')
    const cards = screen.getAllByRole('button')
    expect(cards).toHaveLength(1)
})