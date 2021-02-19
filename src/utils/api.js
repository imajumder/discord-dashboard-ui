import axios from 'axios';

export function getUserDetails() {
    return axios.get('https://latestd.herokuapp.com/api/auth', {
        withCredentials: true,
    });
}   

export function getGuilds() {
    return axios.get('https://latestd.herokuapp.com/api/discord/guilds', {
        withCredentials: true,
    });
}