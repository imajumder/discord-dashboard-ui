import React from 'react';

import {SidebarStyle, IconStyle, SidebarHeader, BaseHeader} from '../styles/styles'

export function MenuWrapper( {
    guilds,
}) {
    
    return (
        <BaseHeader>
        <SidebarStyle>
            <SidebarHeader>
            <IconStyle />
       <div>
            <h1>hello</h1>
        {
            guilds.map((guild) => (
                <li>{guild.name}</li>
            ))
        }
       </div>
       </SidebarHeader>
       </SidebarStyle></BaseHeader>
        
    )
}