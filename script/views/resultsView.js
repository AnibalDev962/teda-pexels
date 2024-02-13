import View from './view.js';
import * as model from '../model.js';

class ResultsView extends View {
    _parentElemenet=document.querySelector('.main__results-container');
    _parentElement=document.querySelector('.img-container-forced');
    _loadMoreButton=document.querySelector('.main__results-container__load-more-button');
    _goUpButton=document.querySelector('.main__results-container__go-up-button');
    _sectionZero=document.querySelector('.navigation');
    _spiner=document.querySelector('.main__results-container__spiner-container');
   

    generateMarkup(data, imgSize){
      //1 clean container//
        this._parentElement.innerHTML='';
      //2 looping data received to extract info to generate markup
          const renderingEls=data.forEach(element => {

            //3 decide what img size to render//SMALL//

            if(imgSize==='small'){

                  let markup=`
                  <div class="img-container-forced__el">
                     <img class="img-container-forced__el__img" src="${element.imgUrl}">
                  </div>`
                  ///rendering markup
                  this._parentElement.insertAdjacentHTML('beforeend',markup); 

            }else if(imgSize=='big'){ //big images///


                  let markup=`
                  <div class="img-container-forced__el">

                    <img class="img-container-forced__el__img" src="${element.imgUrlBig}">
                  </div>`
                   ///rendering markup
                  this._parentElement.insertAdjacentHTML('beforeend',markup); 
            }
   
        })
        
     };

     clearParent(){
      this._parentElement.textContent='';
      console.log('clared🌆')
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

    async displayMoreImages(){
      try{ 
         await model.state.page++;
        
         await model.loadResults(model.state.query);
     
         this.render(model.state.results.els);
      }catch(err){
      console.log(err);
      }

   }

    addHandlerLoadMore(handler){
       this._loadMoreButton.addEventListener('click',handler);
    }

    addHandlerMoveUp(handler){
      this._goUpButton.addEventListener('click',function(){
         handler(this._sectionZero);
         
      })
    }

    toggleSpiner(action){

      if(action==='show'){
         this._spiner.classList.remove('spiner-container-hidden');
      }else if(action==='hide'){
         this._spiner.classList.add('spiner-container-hidden');
      }

    }
};

export default new ResultsView();