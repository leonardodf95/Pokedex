import Menu from "../Menu";
import { Logo, NavigationBar } from "./style";


const Navigation = () => {
  return (
    <NavigationBar>
      <Logo
        alt="PokeAPI-logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
      />
      <Menu/>
    </NavigationBar>
  );
};

export default Navigation;
