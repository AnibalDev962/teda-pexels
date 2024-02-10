import * as configData from './config.js';

export const state={
    query:'',
    results:[],
    page:1,
    resultsPerPage:'',

};

export const loadResults= async function(query){
    try{
        state.query=query;
        console.log(`searching with query ${query}`)

        const data= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${configData.apiAccessKey}`);
        const results= await data.json();
        console.log(results);
        state.results= results;


    }catch(err){
        console.log(err);
        throw err;
    }
}
