import React from 'react';
import { Switch, Route, Redirect, useHistory} from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar'
import { guilds as Mockguilds} from './utils/mocks';
import { Menu } from './components/Menu'
import { Guild } from './utils/types';
import { GuildContextProvider } from './utils/contexts/GuildContexts';
import { GuildStoreContextProvider } from './utils/contexts/GuildStoreContext';
import {MenuPage} from './pages/Menupage/Menupage';



function App() {
  const [guild, setGuild] = React.useState<Guild | undefined>();
  const [guilds, setGuilds] = React.useState<Guild[]>([]);
  const history = useHistory();

  React.useEffect(() => {
    setGuilds(Mockguilds);  
  }, [])
  return (
    <div>
      <GuildContextProvider value={{guild, setGuild}}>
      <GuildStoreContextProvider value={{guilds, setGuild}}>
      <Sidebar guilds={guilds} history={history}/>
      <Menu history={history} />
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard"/>
        <Route path="/dashboard" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId/security/roles" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId/security/authentication" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId/general" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId/miscellaneous/fun-commands" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId/miscellaneous/levels" exact={true} component={DashboardPage} />
        <Route path="/dashboard/:guildId" exact={true} component={DashboardPage} />
        <Route path="/menu" exact={true} component={MenuPage} />

      </Switch>
      </GuildStoreContextProvider>
      </GuildContextProvider>
    </div>
  );
}

export default App;
