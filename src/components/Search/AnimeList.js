import React from 'react';
import naImg from './../../assets/img/na.jpg'
import LikeBtn from './../Common/LikeBtn';
import { findAnime } from './../../constants';
import './../../assets/css/styles.css';


const AnimeList = ({ animes, favorites }) => (
    <div>
        <ul>
            {   animes.map((anime, idx, arr) => {

                    const {
                        id,
                        type,
                        links :{
                            self
                        },
                        attributes : {
                            synopsis,
                            titles : {
                                en_us
                            },
                            posterImage                          
                        }
                    } = anime;

                    let link = `/anime/${ id }`;                   

                    let image = posterImage === null ? naImg : posterImage.tiny;

                    const found = findAnime(id, en_us, posterImage.tiny, favorites);

                    return (
                        <li>
                            <span> id : { id }</span>
                            <img src={ image }/>
                            <p>{ en_us }</p>
                            <a href={ link } class='search-link' ><p>See More</p></a> 
                            <LikeBtn id={ id } title={ en_us } image={ image } link={ link } favorite={ found }/> 

                        </li>
                    );
                
                })
            }
        </ul>
    </div>

);


AnimeList.displayName = 'AnimeList';

export default AnimeList;