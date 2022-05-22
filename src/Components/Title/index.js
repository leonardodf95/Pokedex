import PaginationPokedex from "./Pagination";
import SearchBar from "./SearchInput/Index";
import { Area, Tytle } from "./style";

const SearchArea = () => (
  <Area>
    <Tytle> Pokedex </Tytle>
    <SearchBar/>
    <PaginationPokedex/>
  </Area>
);

export default SearchArea;
