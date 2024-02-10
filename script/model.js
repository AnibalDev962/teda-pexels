import * as configData from './config.js';

export const state={
    query:'',
    results:{},
    page:1,
    resultsPerPage:'',

};

export const loadResults= async function(query){
    try{
        state.query=query;

        console.log(`searching with query ${query}`)

        const response= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${configData.apiAccessKey}`);
        const data= await response.json();
        

        state.results=data.results.map(el=>{
            return{
                imgid:el.id,
                imgUrl:el.urls.small,
            };
        })
        console.log(state.results);

    }catch(err){
        console.log(err);
        throw err;
    }
}

