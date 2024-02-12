import * as configData from './config.js';

export const state={
    query:'',
    results:{
        els:[],
    },
    page:1,
    resultsPerPage:'',

};

export const loadResults= async function(query){
    try{
        state.query=query;

        const response= await fetch(`https://api.unsplash.com/search/photos?page=${state.page}&query=${query}&client_id=${configData.apiAccessKey}`);
        const data= await response.json();
        let tempData={};
        
       
        tempData=data.results.map(el=>{
            return{
                imgid:el.id,
                imgUrl:el.urls.small,
            };
        })

        for (const [i, el] of tempData.entries()){
            state.results.els.push(el);
          
        };

    }catch(err){
        console.log(err);
        throw err;
    }
}

