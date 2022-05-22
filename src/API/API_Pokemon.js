class Pokemon {
  static async fetchPokemonList() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const pokemonResponseList = await response.json();
        const pokemonList = await pokemonResponseList.results;
        
        return pokemonList;
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  static async fetchPokemonInfo(pokemon) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      if (response.ok && response.status === 200) {
        const pokemonInfo = await response.json();
        return pokemonInfo;
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log("erro: ", error);
    }
  }

  static async selectedPagePokemon(limit, initial) {
    try {
      
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${initial}`
        );
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          const pokemonResponseList = await response.json();
          const pokemonList = await pokemonResponseList.results;
          return pokemonList;
        }
      
    } catch (error) {
      console.log('API erro:', error);
    }
  }
}

export default Pokemon;
