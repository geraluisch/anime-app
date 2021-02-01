import React, { Fragment, useContext } from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';
import AnimeInfo from './AnimeInfo'; 
import Message from './../Common/Message';
import ProgressBar from './../Common/ProgressBar';

const Anime = () => {

    const { doneFetch, anime } = useContext(AnimeContext);   
  
    return (
        <Fragment>
            <main>
                {
                    doneFetch ? 
                        ( anime.id !== undefined ? <AnimeInfo anime={ anime }/> : <Message  text='Record not found'/> )
                    :
                        <ProgressBar /> 
                }   
            </main>
        </Fragment>
    );
}

export default Anime;

Anime.displayName = 'Anime';