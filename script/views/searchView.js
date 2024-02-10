import View from './view.js';

class SearchView extends View{
    _parentElement=document.querySelector('.hero-section__container');
    _searchButton=document.querySelector('.hero-section__container__search-button');
    _searchBar=document.querySelector('.hero-section__container__search-bar')
    _query='';

  
    addHandlerSearch(handler){
        const searchBar=this._searchBar;
        
        this._searchButton.addEventListener('click',function(e){
            let query=this._searchBar;
            e.preventDefault();
            
        //1//ADD RENDER ERORR HERE///TODO☀️

        //2//execute search//

        handler(searchBar.value);

        });
    }

  

}

export default new SearchView();
