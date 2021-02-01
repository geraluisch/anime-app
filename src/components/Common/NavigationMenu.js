import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import photo from './../../assets/img/photo.jpg';
import linkedin from './../../assets/img/in.png';
import gmail from './../../assets/img/gmail.png';
import github from './../../assets/img/github.svg';
import './../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',       
    },   
}));

const NavigationMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);      
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <Fragment>
            <nav class="nav-header">
                <ul>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/search/anime'>SEARCH</a></li>
                    <li><a href='/mylist'>MY LIST</a></li>
                    <li><a href="#" onClick={ handleOpen }>ABOUT</a></li>
                </ul>
            </nav>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>               
                
                    <div className="about-paper"> 
                        <h2 id="transition-modal-title">Final JavaScript Master Project</h2>                       
                        <p id="transition-modal-title">Created by Luis Chourio</p>
                        <div className="avatar-photo" >
                            <Avatar alt="Luis Chourio" src={ photo } />
                            <div className="div-avatar-contact" >
                                <a href="mailto: geraluisch@gmial.com" target="_blank" rel="noopener noreferrer">
                                    <Avatar alt="Gmail" src={ gmail } className="avatar-contact"/>
                                </a>
                                <a href="https://www.linkedin.com/in/luis-geraldo-chourio-gudi%C3%B1o-b38b1369/" target="_blank" rel="noopener noreferrer">
                                    <Avatar alt="Linkedin" src={ linkedin } className="avatar-contact"/>
                                </a>
                                <a href="https://github.com/geraluisch" target="_blank" rel="noopener noreferrer">
                                    <Avatar alt="Github" src={ github } className="avatar-contact"/>
                                </a>
                            </div>
                            <p id="transition-modal-title">This project consume the next api: </p> 
                            <a class="link-modal" href="https://kitsu.docs.apiary.io/#" target="_blank" rel="noopener noreferrer">https://kitsu.docs.apiary.io/#</a>
                        </div>  
                    </div>                   
                </Fade>
            </Modal>
        </Fragment>
    );   
}

NavigationMenu.displayName = 'NavigationMenu';

export default NavigationMenu;