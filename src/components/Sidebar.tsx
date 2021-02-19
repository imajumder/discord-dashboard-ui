import * as React from 'react';
import { guilds } from '../utils/mocks';
import { SidebarStyle,
     SidebarHeader,
      IconStyle,
       SidebarContent,
       GuildIcon,
       NewSidebarStyle,
       SidebarContents
     } from '../utils/styles';

import { Guild } from '../utils/types';

import logo from '../download.png'


import { History } from 'history';
import { GuildContext } from '../utils/contexts/GuildContexts';

type SidebarProps = {
    guilds: Guild[];
    history: History;
}

export const Sidebar = (props: SidebarProps) => {
  const {guild, setGuild } = React.useContext(GuildContext);
  const login = () => window.location.href = 'http://localhost:3001/api/auth/discord/redirect';


  if(!guild) return (
      <SidebarStyle>
      <NewSidebarStyle>
          <SidebarHeader>
              <IconStyle onClick={login}></IconStyle>
          </SidebarHeader>
          <SidebarContents> 
              <h1>S</h1>
              <h1>E</h1>
              <h1>R</h1>
              <h1>V</h1>
              <h1>E</h1>
              <h1>R</h1>
              <h1>S</h1>
              <br></br>
              <h1>A</h1>
              <h1>P</h1>
              <h1>P</h1>
              <h1>E</h1>
              <h1>A</h1>
              <h1>R</h1>
              <br></br>
              <h1>A</h1>
              <h1>F</h1>
              <h1>T</h1>
              <h1>E</h1>
              <h1>R</h1>
              <br></br>
              <h1>L</h1>
              <h1>O</h1>
              <h1>G</h1>
              <h1>I</h1>
              <h1>N</h1>
          </SidebarContents>
      </NewSidebarStyle>
      </SidebarStyle>
  )

  return (
  <NewSidebarStyle>
      <SidebarHeader>
          <IconStyle onClick={login}></IconStyle>
      </SidebarHeader>
      <SidebarContent>
          {props.guilds.map((guild) => (
              <GuildIcon key={guild.id} onClick={() => { 
                  setGuild(guild);
                  props.history.push(`/dashboard/${guild.id}`)
              }}/>
          ))}        
      </SidebarContent>
  </NewSidebarStyle>
  );
};