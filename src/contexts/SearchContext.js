import React, { useEffect, useState, createContext } from 'react';
import { apiSearchAnime, apiCategories, searchType, getFromLocalStorage } from '../constants';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [doneFetchAnime, setDoneFetchAnime] = useState(false);
    const [doneFetchCategories, setDoneFetchCategories] = useState(false);
    const [animeList, setAnimeList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [searchT, setSearchT] = useState([]);
    const [searchValue, setSearchValue] = useState(''); 
    const [searchIni, setSearchIni] = useState(false); 
    const [favorites, setFavorites] = useState(getFromLocalStorage())

    useEffect(() => findCategories(), []);

    const findCategories = () => {
        fetch(apiCategories(),
             { method : 'GET' },
        ).then(res => res.json()
        ).then(result => {
            const { data } = result;
            setDoneFetchCategories(true);
            setCategoriesList(data);
        }).catch(err => {
            console.log('Error: ', err);
        })
    }

    const findAnime = (searchBy, searchText) => {
        fetch(apiSearchAnime(searchBy, searchText),
            { method : 'GET'},
        ).then(res => res.json()            
        ).then(result => {
            const { data } = result;
            setDoneFetchAnime(true);
            setAnimeList(data);           
            setFavorites(getFromLocalStorage());
        }).catch(err => {
            console.log('Error: ', err);
        });
    }

    const validateSearchAnime = (e, 
                                searchBy ,  
                                searchCat,  
                                searchText = document.querySelector('#text_search') != null ? document.querySelector('#text_search').value.toLowerCase() : '') => {  
                              
        if(searchType !== searchBy && searchBy.length > 0 ) {
            setSearchT(searchBy);            
            setDoneFetchAnime(false);
            if(searchBy === searchType[1] && searchValue !== searchText) {             
                setSearchValue(searchText);
                findAnime('text', searchText);  
                setSearchIni(true);              
            } else if(searchValue !== searchCat) {             
                setSearchValue(searchCat);
                findAnime(searchBy, searchCat);
                setSearchIni(true);  
            } 
        }

    } 

    return (

        <SearchContext.Provider value={{ validateSearchAnime, doneFetchAnime, doneFetchCategories, animeList, categoriesList, searchIni, favorites  }}>
            { children }
        </SearchContext.Provider> 

    )

}

export default SearchContextProvider;