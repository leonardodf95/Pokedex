import { ItemMenu, MenuBar } from "./style"
import { TiHome } from 'react-icons/ti'
import {IoMdContact} from 'react-icons/io'

const Menu = () => (
    <MenuBar>
        <ItemMenu>
            <TiHome/>Pokedex
        </ItemMenu>
        <ItemMenu>
            <IoMdContact/>About
        </ItemMenu>
    </MenuBar>
)

export default Menu