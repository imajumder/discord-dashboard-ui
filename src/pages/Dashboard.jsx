import * as react from 'react';
import { Dropdown } from '../components/DropdownMenu';
import { selectMenuItems, selctMenuItems, selecMenuItems } from '../utils/constants';
import { GuildContext } from '../utils/contexts/GuildContexts';
import { GuildStoreContext } from '../utils/contexts/GuildStoreContext';
import { BasePageStyle, DashboardContent, DashboardHeader, MenuContent, MenuCategory, MenuCategoryItem } from '../utils/styles';
import image from './download.png'
import sc1 from './Untitled.png'

import {getUserDetails, getGuilds} from '../utils/api'




export const DashboardPage = (props)  => {
    const {guildId} = props.match.params;
    const { guild, setGuild } = react.useContext(GuildContext);
    const { guilds } = react.useContext(GuildStoreContext);
    const [user, setUser] = react.useState(null);

    react.useEffect(() => {
        
    })

    react.useEffect(() => {
        const findGuild = guilds.find((g) => g.id === guildId);
        setGuild(findGuild)
    })

     

    if(!guild) return <BasePageStyle>
    <DashboardHeader>
        Information
    </DashboardHeader>
    <DashboardContent>
        This Dashboard helps you control this bot and lets you configure some of its functions.
        To get started
        <p><br></br></p>
        <ul>
            <li>Login to the dashboard.. To do so click on the icon on the up-left corner</li>
            <br></br>
            <img src={sc1}></img>
            <br></br>
            <br></br>
            <li>The icons which represent all the servers this bot and you share are avaible on the left-hand side. Try clicking on them <br></br>( You may only be able to configure the bot only if you have the required status ) </li>

        </ul>
    </DashboardContent>
    </BasePageStyle>
    return( 
        <BasePageStyle>
    <DashboardHeader>
    <p>{guild.name}</p>    
    </DashboardHeader>
    <DashboardContent>
        <Dropdown 
        title="Update @everyone Role"
        items={selectMenuItems}></Dropdown>
        <Dropdown 
        title="Update Mods Role"
        items={selctMenuItems}></Dropdown>
        <Dropdown 
        title="Update Muted Role"
        items={selecMenuItems}></Dropdown>
    </DashboardContent>
    </BasePageStyle>
    );
};