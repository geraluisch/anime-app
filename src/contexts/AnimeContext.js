import React, { createContext, useState, useEffect } from 'react';
import { apiFindAinme } from '../constants';

export const AnimeContext = createContext();

const AnimeContextProvider = ({ children }) => {
    const animeId = window.location.pathname.split('/')[2];
    const [doneFetch, setDoneFetch] = useState(false);
    const [anime, setAnime] = useState([]);

    useEffect(() => getAnime(animeId),[]);
    

    const getAnime = animeId => {
        fetch(apiFindAinme(animeId),
              { method : 'GET' },
        ).then(res => res.json()
        ).then(result => {
            setDoneFetch(true);
            if(result.errors === undefined) {              
                const { data } = result;                
                setAnime(data);
            } else {             
                setAnime(result);
            }        
        }).catch(err =>{
            console.log('Error: ', err);
        });

    }

    return (
        <AnimeContext.Provider value={{ doneFetch, anime }}>
            { children }    
        </AnimeContext.Provider>
    );

}

export default AnimeContextProvider;