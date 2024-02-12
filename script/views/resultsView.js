import View from './view.js';
import * as model from '../model.js';

class ResultsView extends View {
    _parentElemenet=document.querySelector('.main__results-container');
    _loadMoreButton=document.querySelector('.main__results-container__load-more-button');
    _goUpButton=document.querySelector('.main__results-container__go-up-button');
    _sectionZero=document.querySelector('.navigation');
    

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
       this._parentElemenet.classList.remove('img-container-hidden');//☀️TODO ADD HIDE VERSION OF THIS FUNCTION/

    }

    displayMoreImages(){
     model.state.page++;
     console.log(model.state.page);
     this.render();

    }

    addHandlerLoadMore(handler){
       this._loadMoreButton.addEventListener('click',handler);
    }

    addHandlerMoveUp(handler){
      this._goUpButton.addEventListener('click',function(){
         handler(this._sectionZero);
         
      })
    }
};

export default new ResultsView();