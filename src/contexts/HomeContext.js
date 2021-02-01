import React, { createContext, useState, useEffect } from 'react';
import { apiTrendingAnime } from '../constants';

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState(false);
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => getTrendingAnime(), []);
    
    const getTrendingAnime = () => {
        fetch(apiTrendingAnime(),
             { method : 'GET' },
        ).then(res => res.json()
        ).then(result => {           
            const { data } = result;
            setDoneFetch(true);
            setTopAnime(data);            
        }).catch(error => {
            console.log('Error: ', error);
        });      
    };

    return (
        <HomeContext.Provider value={{ doneFetch, topAnime }}>
            { children }
        </HomeContext.Provider>
    );  

}

export default HomeContextProvider;

