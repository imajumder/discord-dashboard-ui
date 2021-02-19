import * as React from 'react';

import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './styles/themes';
import { WhiteTheme } from './styles/themes';

import { SidebarStyle,
     SidebarHeader,
      IconStyle,
       NewSidebarStyle,
       SidebarContents, Button as Buttons, StyledBorder, MenuContent, MenuStyle, MenuHeader, NewMenuHeader
     } from './styles/styles';





 export function Sidebar() {

    function thr() {
        ReactDOM.render(
          <React.StrictMode>
            <Router>
              <ThemeProvider theme={WhiteTheme}>
                <App />
              </ThemeProvider>
            </Router>
          </React.StrictMode>,
          document.getElementById('root')
        );
      }

      function thh() {
        ReactDOM.render(
          <React.StrictMode>
            <Router>
              <ThemeProvider theme={DarkTheme}>
                <App />
              </ThemeProvider>
            </Router>
          </React.StrictMode>,
          document.getElementById('root')
        );
      }


  const login = () => window.location.href = 'http://localhost:3001/api/auth/discord/redirect';
  const login1 = () => window.location.href = 'http://localhost:3001/dashboard';


  return (
    <SidebarStyle>
    <NewSidebarStyle>
        <SidebarHeader>
            <IconStyle onClick={login}></IconStyle>
        </SidebarHeader>
        <SidebarContents> 
            <h1>Login</h1>
           <br></br>
            <br></br>
            <br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <StyledBorder>
                <h1>Themes</h1>
            <Buttons onClick={thr}>White
            </Buttons>
            <Buttons onClick={thh}>Dark</Buttons>
            </StyledBorder>
        </SidebarContents>
    </NewSidebarStyle>
    <MenuStyle>
    <MenuHeader>
      <NewMenuHeader onClick={login1}>
        Dashboard</NewMenuHeader>        
    </MenuHeader>
    <MenuContent>
        GO to sodjaisdia
    </MenuContent>
</MenuStyle>
    </SidebarStyle>
    

  )
 }