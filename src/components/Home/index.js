import React, { Fragment, useContext } from 'react';
import { HomeContext } from  './../../contexts/HomeContext';
import Message from './../Common/Message';
import ProgressBar from './../Common/ProgressBar';
import TopAnime from './TopAnime';
import './../../assets/css/styles.css';

const Home = () => {

    const { doneFetch, topAnime } = useContext(HomeContext);
    
    return (
        <Fragment>
            {
                doneFetch ?
                    ( topAnime.length > 0 ? <TopAnime topAnime={ topAnime } /*favorites={ favorites }*/ /> : <Message text='Error' /> ) 
                :
                    <ProgressBar />
            }    
        </Fragment>       
    );
}

Home.displayName = 'Home';

export default Home;