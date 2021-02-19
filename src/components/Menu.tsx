import * as React from 'react';
import { guilds } from '../utils/mocks';
import { MenuStyle,
    MenuHeader,
    MenuContent,
    SidebarContents,
    MenuCategory,
    MenuCategoryItem,
    Buttons,
     } from '../utils/styles';
import { menuItems } from '../utils/constants'; 
import { History } from 'history';
import { GuildContext } from '../utils/contexts/GuildContexts';

type MenuProps = {
    history: History;
}

export const Menu = (props: MenuProps) => {
    const { guild } = React.useContext(GuildContext);

    const login = () => window.location.href = 'http://localhost:3000/dashboard/123';

    if(!guild) return <MenuStyle>
        <MenuHeader>
            Please Select A Server
        </MenuHeader>
        <MenuContent>
        <div>
    <Buttons
      onClick={login}
    >
      Go to servers lists
    </Buttons>
    </div>
        </MenuContent>
    </MenuStyle>
  return <MenuStyle>
      <MenuHeader>
          <span>Rigurd Bot's Dashboard</span>
      </MenuHeader>
      <MenuContent>
          {menuItems(guild?.id).map((item) => 
          <MenuCategory key={item.name}>
              <span>{item.name}</span>
              {item.routes.map((route) => (
                  <MenuCategoryItem key= {route.name} onClick={() => 
                    props.history.push(route.path)}>
                      <span># {route.name} </span>
                  </MenuCategoryItem>
              ))}
          </MenuCategory>
          )}
      </MenuContent>
  </MenuStyle>
};