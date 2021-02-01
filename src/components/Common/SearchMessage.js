import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './../../assets/css/styles.css';

const SearchMessage = ({ text, type }) => (

    type === 'back' ?
        (
            <div class="">
                <Fragment>
                    <h2> { text } </h2>    
                    <Link  to="/">
                        <Button variant="contained" >Return to Home</Button> 
                    </Link>
                </Fragment>
            </div>
        )
    :
        ( <div class=""><h2> { text } </h2></div>   )


);

SearchMessage.displayName ='SearchMessage';

export default SearchMessage;