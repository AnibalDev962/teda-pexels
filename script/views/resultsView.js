import View from './view.js';

class ResultsView extends View {
    _parentElemenet=document.querySelector('.main__results-container');
    _loadMoreButton=document.querySelector('.main__results-container__load-more-button');

     generateMarkup(data){
        data.forEach(element => {
            const markup=` <div class="main__results-container__el">
            <img class="main__results-container__el__img" src="${element.imgUrl}">
        </div>`
            this._parentElemenet.insertAdjacentHTML('afterbegin',markup);
        });
     }

     displayLoadMoreButton(action){
       if(action==='display'){
        this._loadMoreButton.classList.add('load-more-visible');
       }else if(action==='hide'){
        this._loadMoreButton.classList.remove('load-more-visible');
       }
    }

    displayOrHideImgContainer(action){
       /*  img-container-hidden */
       this._parentElemenet.classList.remove('img-container-hidden');

    }

    addHandlerLoadMore(handler){
       this._loadMoreButton.addEventListener('click',function(){
        console.log('loading-more');
       })
    }




}

export default new ResultsView();