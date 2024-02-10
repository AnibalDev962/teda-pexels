import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';


const controlSearchAndRender=async function(query){ 
   try{ 
   ///search results//
await model.loadResults(query);
   //render results//
resultsView.render();

 }catch(err){
   console.log(err);
 }
}



///❤️❤️❤️initializing❤️❤️❤️////
const init=function(){
   //1 search and load results//
   searchView.addHandlerSearch(controlSearchAndRender)
   

};

init(); 



