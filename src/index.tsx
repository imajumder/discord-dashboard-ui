import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './components/styles/themes';
import { WhiteTheme } from './components/styles/themes';
import {Button} from '@chakra-ui/react'
import { SidebarContent, SidebarContents, SidebarHeader, SidebarStyle, BaseHeader, BasePageStyle, MenuCategory, MenuCategoryItem, MenuContent, MenuHeader, MenuStyle, DashboardContent, DashboardHeader} from './components/styles/styles'
import { DashboardPage } from './pages';



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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
