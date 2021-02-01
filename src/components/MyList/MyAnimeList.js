import React from 'react';
// import naImg from './../../assets/img/na.jpg'
import LikeBtn from './../Common/LikeBtn';
import './../../assets/css/styles.css';


const MyAnimeList = ({ animes }) => (
    <div>
        <ul>
            {   animes.map((anime, idx, arr) => {

                    const {
                        id,
                        nombre,
                        imagen
                        
                    } = anime;

                    let link = `/anime/${ id }`;   

                    return (
                        <li>
                            <span> id : { id }</span>
                            <img src={ imagen }/>
                            <p>{ nombre }</p>
                            <a href={ link } class='search-link' ><p>See More</p></a> 
                            <LikeBtn id={ id } title={ nombre } image={ imagen } link={ link } favorite={ animes }/> 
                        </li>
                    );
                
                })
            }
        </ul>
    </div>

);






MyAnimeList.displayName = 'MyAnimeList';

export default MyAnimeList;