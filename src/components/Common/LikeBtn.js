import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { saveToLocalStorage, deleteFromLocalStorage } from './../../constants'
import './../../assets/css/styles.css';

// class LikeBtn extends Component {  
//     constructor(props) {
//         super(props)
//         this.state = {
//             liked: this.props.favorite
//         };
//       }

//     state = {
//         liked: false
//     }    

    

    // toggle = () => {
    //     this.setState({
    //         liked: !this.state.liked
    //     })

    //     const likeAnime = saveToLocalStorage;
    //     const dislikeAnime = saveToLocalStorage;

      
    //     if( this.state.liked )
    //         likeAnime(this.props.id, this.props.title, this.props.image);
    //     // else 
    //     //     dislikeAnime(this.props.id, this.props.title, this.props.image);
    // }

   

//     render(){
//         return(
            // <button className='likeBtn' onClick={ this.toggle }>
            //    {
            //        this.state.liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>
            //    }
            // </button>
//         )
//     }

// }

const LikeBtn = ({ id, title, image, favorite }) => {

    const [liked, setLiked] = useState(favorite);  

    const toggle = () => {     
        
        if( !liked )
            saveToLocalStorage(id, title, image);
        else 
            deleteFromLocalStorage(id, title, image);

        console.log(!liked);   

        setLiked(!liked)  
    }
    
    return (
        <button className='likeBtn' onClick={ toggle }>
        {           
           liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>
        }
        </button>
    );



}

LikeBtn.displayName = 'LikeBtn';

export default LikeBtn;