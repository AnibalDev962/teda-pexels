import View from './view.js';
import * as model from '../model.js';
import resultsView from './resultsView.js';

class SearchView extends View{
    _parentElement=document.querySelector('.hero-section__container');
    _searchButton=document.querySelector('.hero-section__container__search-button');
    _searchBar=document.querySelector('.hero-section__container__search-bar')
    _query='';


   
  
    addHandlerSearch(handler){
        const searchBar=this._searchBar;
        
        this._searchButton.addEventListener('click',function(e){
            console.log('aceptation');
            let query=this._searchBar;
            e.preventDefault();

                handler(searchBar.value);
                model.clearAppState();
                resultsView.clearParent();
               

        });
    }



   

    
  

}

export default new SearchView();
