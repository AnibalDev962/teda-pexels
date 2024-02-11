import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';


const controlSearchAndRender=async function(query){ 
   try{ 
   ///search results//
await model.loadResults(query);
   //render results//
resultsView.displayOrHideImgContainer();
resultsView.render();
resultsView.displayLoadMoreButton('display');

 }catch(err){
   console.log(err);
 }
}

const loadMoreFunction=function(){
   console.log('loading more');
}

///❤️❤️❤️initializing❤️❤️❤️////
const init=function(){
   searchView.renderYear();
   //1 search and load results//
   searchView.addHandlerSearch(controlSearchAndRender)
   //2 load more functionality activated//
   resultsView.addHandlerLoadMore(loadMoreFunction);

   
};

init(); 



