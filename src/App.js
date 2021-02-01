import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContextProvider from './contexts/HomeContext';
import AnimeContextProvider from './contexts/AnimeContext';
import SearchContextProvider from './contexts/SearchContext';
import Header from './components/Common/Header';
import NavigationMenu from './components/Common/NavigationMenu';
import Footer from './components/Common/Footer';
import Home from  './components/Home';
import Anime from './components/Anime';
import Search from './components/Search';
import MyList from './components/MyList';
import NotFound from './components/NotFound';

const App = () => (
    <BrowserRouter>
        <Header/>
        <NavigationMenu/>
        <Switch>        
            <Route exact path='/'>
                <HomeContextProvider>        
                    <Home/>
                </HomeContextProvider>        
            </Route>
            <Route path='/anime/:id'>
                <AnimeContextProvider>
                    <Anime/>
                </AnimeContextProvider>
            </Route>
            <Route path='/search/anime'>
                <SearchContextProvider>
                    <Search/>        
                </SearchContextProvider>
            </Route>
            <Route path='/mylist'>               
                <MyList/>   
            </Route>
            <Route component={NotFound} />
        </Switch>
        <Footer/>
    </BrowserRouter>
);

App.displayName = 'App';

export default App;