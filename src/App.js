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
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')

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
      setLoading(true);
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
      setLoading(false);
      setPokemon(resultsFilter);
    } catch (error) {
      console.log("App fetch pokemon erro:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const SearchPokemon = async (pokemon) => {
    const data = await pokemon.toLowerCase()
    setLoading(true)
    if (data === '') {
      return fetchPokemon();
    }
    // eslint-disable-next-line array-callback-return
    nameSearch = names.filter((name) => {
      if(name.indexOf(data) === 0){
        return name;
      }})
    setNotFound(false);
    const results = await nameSearch.map(async (name) => await ClassPokemon.fetchPokemonInfo(name))
    const result = await Promise.all(results);
    console.log('result', result)
    if (result.length === 0) {
      setNotFound(true);
    } else {
      setLoading(false)
      setPage(0);
      setTotalPage(1);
      setPokemon(result);
      
    }
  };

  return (
    <div>
      <PageContext.Provider
        value={{
          load: loading,
          currentPage: page,
          setCurrentPage: setPage,
          totalPages: totalPage,
          Previously: previouslyPage,
          Next: nextPage,
        }}
      >
        <Navigation />
        <SearchContext.Provider value={{
          search: search,
          setSearch: setSearch,
          searchFunction: SearchPokemon
        }}>
          <SearchArea />
        </SearchContext.Provider>
        {(notFound) ? 'Não encontrado' : <AreaCard pokemon={pokemon} page={page} loading={loading}/>}
      </PageContext.Provider>
    </div>
  );
}

export default App;
