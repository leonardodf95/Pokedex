import { InputSearch, SearchButton } from "./style"
import {SearchOutlined} from '@ant-design/icons'
import { useContext, useState } from "react"
import SearchContext from "../../../Contexts/SearchContext"

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const { searchFunction } = useContext(SearchContext)
    

    const searchPokemoHandler = evt => {
        // evt.preventDefault();
        setSearch(evt.target.value)
        if(evt.target.value.lenght === 0){
            searchFunction(undefined)
            console.log('search',search)
        }
        console.log('search',search)
        searchFunction(search)
    }

    const searchOnButton = () => {
        searchFunction(search)
    }
    
    return (
        <>
        <InputSearch placeholder="   Buscar Pokemon" value={search} onChange={searchPokemoHandler}/>
        <SearchButton onClick={searchOnButton}><SearchOutlined /></SearchButton>
        </>
    )
}

export default SearchBar