import { InputSearch, SearchButton } from "./style"
import {SearchOutlined} from '@ant-design/icons'
import { useContext, useEffect, useState } from "react"
import SearchContext from "../../../Contexts/SearchContext"

const SearchBar = () => {
    const { searchFunction, search, setSearch } = useContext(SearchContext)
    

    const searchPokemonHandler = (search) => {
        if(search.lenght === 0){
            searchFunction(undefined)
        }
        console.log('search',search)
        searchFunction(search)
    }

    const searchOnButton = () => {
        searchFunction(search)
    }
    useEffect(()=>{searchPokemonHandler(search)}, [search])
    return (
        <>
        <InputSearch placeholder="   Buscar Pokemon" type='search'  value={search} onChange={e => {
            setSearch(e.target.value);
        }}/>
        <SearchButton onClick={searchOnButton}><SearchOutlined /></SearchButton>
        </>
    )
}

export default SearchBar