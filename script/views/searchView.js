import View from './view.js';

class SearchView extends View{
    _parentElement=document.querySelector('.hero-section__container');
    _searchButton=document.querySelector('.hero-section__container__search-button');
    _searchBar=document.querySelector('.hero-section__container__search-bar')
    _query='';

    setQuery(){
        this._query=this._searchBar.value;
    }
    addHandlerSearch(handler){
        this._searchButton.addEventListener('click',handler);
    }

  

}

export default new SearchView();
