import React from 'react';
import MyAnimeList from './MyAnimeList';
import Message from './../Common/Message';
import { getFromLocalStorage } from './../../constants';
import './../../assets/css/styles.css';

const MyList = () => {
    const myList = getFromLocalStorage();

    return (
        <main>
        {   
            myList.length > 0 ? <MyAnimeList animes={ myList } /> : <Message text='Animes not found' /> 
        }
        </main>

    )

}

MyList.displayName = 'MyList';

export default MyList;