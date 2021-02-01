import React from 'react';
import Anime from './Anime';
import { getFromLocalStorage, findAnime } from './../../constants';
import './../../assets/css/styles.css';

const TopAnime = ({ topAnime/*, favorites*/ }) => {

    //const getAnime = getFromLocalStorage;
    
    const animes = getFromLocalStorage(/*'',''*/); 

    console.log(animes);

    return(
        <main>
            <p className="titulo">Trending Anime</p>
            <div class="content">
            {            

                topAnime.map((anime, idx, arr) => {
                    const {
                        id,
                        type,
                        links,
                        attributes : {
                            synopsis,
                            titles,
                            posterImage
                        }
                    } = anime;  
                    
                    const found = findAnime(id, titles.en_us, posterImage.tiny, animes);

                    return (
                        <Anime
                            id = { id } 
                            type = { type }
                            link = { links.self }
                            synopsis = { synopsis }
                            title = { titles.en_us }
                            image = {  posterImage.tiny }
                            favorite = { found }
                        />
                    );
                })    
            }
            </div>       
        </main>
    )
};

TopAnime.displayName = 'TopAnime';

export default TopAnime;