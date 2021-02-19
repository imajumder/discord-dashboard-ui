import React from 'react';

import {getUserDetails, getGuilds} from '../../utils/api'


import { BasePageStyle, DashboardContent, DashboardHeader } from '../../utils/styles';


export function MenuPage( {
    history,
} ) {
     const [loading, setLoading] = React.useState(true)

    const [user, setUser] = React.useState( null );

  const [guilds, setGuilds] = React.useState( [] );

       React.useEffect(() => { getUserDetails()
        .then(({ data }) => {
            setUser(data);
            setLoading(false)
            return getGuilds()
        }).then(({data}) => {
            console.log(data)
            setGuilds(data)
        }).catch((err) => {
        history.push('/')
        setLoading(false)
        });
                
    }, [])

    return  (
        <BasePageStyle>
        <DashboardHeader>
        {
            guilds.map((guild) => (
                <li>{guild.id}</li>
            ))
        }
        </DashboardHeader>
    </BasePageStyle>
    )

}