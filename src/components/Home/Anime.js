import React from 'react';
import LikeBtn from './../Common/LikeBtn';
import './../../assets/css/styles.css';

const Anime = ({ id, type, link, synopsis, title, image, favorite }) => {
    return (
        <div class="anime content-1">
            <div class="content-image">
                <img src={ image } alt="" />
            </div>
            <div class="content-info">
                <h3>{ title }</h3>
                <p class="synopsis">{ synopsis }</p>
                <div className="likeDiv"> 
                    <a href={ link } ><p>See More</p></a> 
                    <LikeBtn id={ id } title={ title } image={ image } link={ link } favorite={ favorite }/> 
                </div>  
            </div>
        </div>
    );

};

Anime.displayName = 'Anime';

export default Anime;