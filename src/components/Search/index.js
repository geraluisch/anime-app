import React, { Fragment, useContext, useState } from 'react';
import { SearchContext } from './../../contexts/SearchContext';
import { searchType } from './../../constants';
import { makeStyles } from '@material-ui/core/styles';
import { getFromLocalStorage } from './../../constants';
import AnimeList from './AnimeList';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Message from '../Common/Message';
import ProgressBar from '../Common/ProgressBar';
import './../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const Search = () => {
    const { validateSearchAnime, doneFetchAnime, doneFetchCategories, animeList, categoriesList, searchIni, favorites } = useContext( SearchContext );

    const [categoriesSearch, setCategoriesSearch] = useState([]);
    const [typeSearch, setSearchType] = useState([]);             
    const classes = useStyles();   

    const handleChangeSearchBy = (event) => {      
        setSearchType(event.target.value);
    };

    const handleChange = (event) => {        
        setCategoriesSearch(event.target.value);
    };
    
    return (
        <Fragment>
            <main>
                <div>
                    <FormControl className={ classes.formControl }>
                        <InputLabel id="type-label">Search by</InputLabel>
                        <Select
                            labelId="type-label"
                            id="q_type"                            
                            value={ typeSearch }
                            onChange={ handleChangeSearchBy }
                        >
                            { searchType.map((row,idx) => (                                
                                <MenuItem key={ idx } value={ row }>{ row }</MenuItem>
                            ))}
                        </Select>
                    </FormControl>



                    {
                       typeSearch === 'categories' ?
                            (
                                doneFetchCategories ?
                                    (
                                        categoriesList.length > 0 ?
                                            (
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel id="categories-label">Cetegories</InputLabel>
                                                    <Select
                                                        labelId="categories-label"
                                                        id="q_catg"
                                                        value={ categoriesSearch }
                                                        onChange={ handleChange }
                                                    >
                                                        { categoriesList.map((row,idx) => (                                
                                                            <MenuItem key={ idx } value={ row.attributes.slug }>{ row.attributes.title }</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>

                                            )
                                        :
                                            <Message text='Categories not found'/>
                                    )
                                                                        
                                :
                                    <ProgressBar />
                            )
                        :
                            (
                                <input placeholder="Insert an anime" type="text" id="text_search" class="text_search"></input>
                            )
                                                        
                    }

                    <Button variant="contained" onClick={ e => validateSearchAnime(e,typeSearch,categoriesSearch) }>Search</Button>  
                </div>
                <div>
                    {
                        searchIni ?
                        (
                            doneFetchAnime ?
                            ( animeList.length > 0 ? <AnimeList animes={ animeList } favorites={ favorites }/> : <Message text='Anime not found' /> )  
                            :
                                <ProgressBar />
                        )                        
                        :
                        ( <div class=""> Search Animes </div>  )


                    }
                </div>
            </main>            
        </Fragment>
    )

}

Search.displayName = 'Search';

export default Search;