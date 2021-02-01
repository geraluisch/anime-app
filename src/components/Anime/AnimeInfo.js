import React from 'react';
import header from './../../assets/img/generic.jpg'
import './../../assets/css/styles.css';

const AnimeInfo = ({ anime }) => {
    
    const { 
        id,
        type,
        attributes,
        relationships,
    } = anime;    

    let cover = attributes.coverImage === null ? header : attributes.coverImage.tiny;
   
    return (
        <div>
            <img src={ cover } />
            <p>{ attributes.titles.en_jp }  </p>
            <p>{ attributes.createdAt }</p>
            <div>{ attributes.synopsis }</div>
            
        </div>

    )
};

AnimeInfo.displayName = 'AnimeInfo';

export default AnimeInfo;