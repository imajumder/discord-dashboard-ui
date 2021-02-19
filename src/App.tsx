import React from 'react';
import './App.css';
import { Switch, Route, useHistory} from 'react-router-dom';
import {LandingPage, MenuPage, DashboardPage} from './pages';
import {Sidebar} from './components/Sidebar'
import {MenuPlace} from './components/Menu'

export function App() {
  const history = useHistory();
  return (
   <div>
      <Switch>
      <Sidebar />
      <MenuPlace history={history}/>
      <Route path="/" exact={true} component={DashboardPage} />
      <Route path="/dashboard" exact={true} component={DashboardPage} />
    </Switch>
   </div>
  );
}

export default App;
