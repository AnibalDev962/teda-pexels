import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';


const search=function(query){ 
model.loadResults(query);
}

const init=function(){
   searchView.addHandlerSearch(search)
};

/*  init();  */

