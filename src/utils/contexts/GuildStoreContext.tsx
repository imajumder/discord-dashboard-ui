import { Guild } from '../types';

import { createContext } from 'react';

type GuildStoreContextType = {
    guilds: Guild[];
    setGuild: Function;
};

export const GuildStoreContext = createContext<GuildStoreContextType>({
    guilds: [],
    setGuild: (guild: Guild[]) => {},
});

export const GuildStoreContextProvider = GuildStoreContext.Provider;
