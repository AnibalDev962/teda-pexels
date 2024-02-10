import View from './view.js';

class ResultsView extends View {
    _parentElemenet=document.querySelector('.main__results-container');

     generateMarkup(data){
        data.forEach(element => {
            const markup=`<img src="${element.imgUrl}"></img>`
            this._parentElemenet.insertAdjacentHTML('afterbegin',markup);
        });
     }

}

export default new ResultsView();