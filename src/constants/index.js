const cors_anyWhere = '';//'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://kitsu.io/api/edge/';
const trend_anime = 'trending/anime';
const find_anime = 'anime/'
const categories_anime = 'categories';
const search_animes = 'anime?filter[';
const search_animeC = ']=';
const oAnime = {
    id:null,
    nombre:'',
    imagen:''
}

export const apiTrendingAnime = () => `${ cors_anyWhere }${ base_url}${trend_anime }`;
export const apiCategories = () => `${ cors_anyWhere }${ base_url}${categories_anime }`;
export const apiSearchAnime =  ( searchBy, searchText ) => `${ cors_anyWhere }${ base_url }${ search_animes }${ searchBy }${ search_animeC }${searchText}`;
export const apiFindAinme = ( id ) => `${ cors_anyWhere }${ base_url }${ find_anime }${ id }`;
export const searchType = ['categories', 'name'];
export const currentDate = new Date();
export const saveToLocalStorage = (id, nombre, imagen) =>{
    //console.log(anime);
    let animeJSON = localStorage.getItem('favorites');
    if(animeJSON === null || animeJSON === '')
        animeJSON = []; 
    else 
        animeJSON = JSON.parse(animeJSON); 

    // if(animeJSON === null)
    // animeJSON = [];   
   
    const anime = Object.create(oAnime);
    anime.id = id;
    anime.nombre = nombre;
    anime.imagen = imagen;    

    animeJSON.push(anime);

    localStorage.setItem('favorites',  JSON.stringify(animeJSON));   
} 
export const deleteFromLocalStorage = (id, nombre, imagen) => {

    console.log('borrando');   

    let animeJSON = localStorage.getItem('favorites');

    const anime = Object.create(oAnime);
    anime.id = id;
    anime.nombre = nombre;
    anime.imagen = imagen;  
    
    if(animeJSON !== null && animeJSON !== '') {
        animeJSON = JSON.parse(animeJSON); 
        animeJSON = animeJSON.filter(animes => JSON.stringify(animes) !== JSON.stringify(anime));

        localStorage.setItem('favorites',  JSON.stringify(animeJSON));    
    }
       
    
} 
export const getFromLocalStorage = (/*filer = '', anime = ''*/) =>{

    let animeJSON = localStorage.getItem('favorites');
    
    if(animeJSON === "")
        animeJSON = [];
    else 
        animeJSON = JSON.parse(animeJSON);

    return animeJSON;  
} 
export const findAnime = (id, nombre, imagen, arreglo) =>{

    let found = false;

    const anime = Object.create(oAnime);
    anime.id = id;
    anime.nombre = nombre;
    anime.imagen = imagen;  
    
    if(Array.isArray(arreglo))
        found = arreglo.find(element => JSON.stringify(element) === JSON.stringify(anime)) === undefined ? false : true;
    else
        localStorage.setItem('favorites',  []); 

    return found;  
} 

