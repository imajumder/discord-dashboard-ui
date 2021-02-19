import { MenuStyle,
    MenuHeader,
    MenuContent,
    SidebarContents,
    MenuCategory,
    MenuCategoryItem,
    Buttons,
    BasePageStyle,
     } from './styles/styles';

import {History} from 'history';


     type MenuProps = {
        history: History;
    }

export const MenuPlace = (props: MenuProps) => {

return (
    <MenuStyle>
    <MenuHeader>
        Pls
    </MenuHeader>
    <MenuContent>
        GO to sodjaisdia
    </MenuContent>
</MenuStyle>

)
    
}