import React, { useEffect, useState, useCallback } from "react";
import ClassPokemon from "./API/API_Pokemon";
import AreaCard from "./Components/CardPokemonArea";
import Navigation from "./Components/NavigationBar";
import SearchArea from "./Components/Title";
import PageContext from "./Contexts/PageContext";
import SearchContext from "./Contexts/SearchContext";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [notFound, setNotFound] = useState();
  const [names, setNames] = useState([])

  const itemsPerPage = 24;
  let nameSearch = [];
  const previouslyPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };



  const fetchPokemon = useCallback(async () => {
    try {
      const dataTotal = await ClassPokemon.fetchPokemonList();
      const names = await dataTotal.map((pokemon) => {return pokemon.name});
      setNames(names);   
      const totalPokemons = dataTotal.length;
      const totalPage = Math.ceil(totalPokemons / itemsPerPage);
      setTotalPage(totalPage);
      
      const data = await ClassPokemon.selectedPagePokemon(
        itemsPerPage,
        itemsPerPage * page
      );

      const promises = data.map(async (pokemon) => {
        return await ClassPokemon.fetchPokemonInfo(pokemon.name);
      });
      const results = await Promise.all(promises);
      // eslint-disable-next-line array-callback-return
      const resultsFilter = results.filter((results) => {
        if (results !== undefined) {
          return results;
        }
      });
      setPokemon(resultsFilter);
    } catch (error) {
      console.log("App fetch pokemon erro:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const SearchPokemon = async (pokemon) => {
    const data = await pokemon.toLowerCase()
    if (data === '') {
      return fetchPokemon();
    }
    console.log(names);
    // eslint-disable-next-line array-callback-return
    nameSearch = names.filter((name) => {
      if(name.indexOf(data) === 0){
        return name;
      }})
    setNotFound(false);
    console.log('nameSearch', nameSearch);
    const results = await nameSearch.map(async (name) => await ClassPokemon.fetchPokemonInfo(name))
    const result = await Promise.all(results);
    console.log('result',result)
    if (!result) {
      setNotFound(true);
    } else {
      setPage(0);
      setTotalPage(1);
      setPokemon(result);
      
    }
  };

  return (
    <div>
      <PageContext.Provider
        value={{
          currentPage: page,
          setCurrentPage: setPage,
          totalPages: totalPage,
          Previously: previouslyPage,
          Next: nextPage,
        }}
      >
        <Navigation />
        <SearchContext.Provider value={{
          searchFunction: SearchPokemon
        }}>
          <SearchArea />
        </SearchContext.Provider>
        {(notFound) ? 'Não encontrado' : <AreaCard pokemon={pokemon} page={page} />}
      </PageContext.Provider>
    </div>
  );
}

export default App;
