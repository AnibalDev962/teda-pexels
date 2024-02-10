import * as model from '../model.js';

export default class View{
    _data;

    render(data){
        this._data=model.state.results;
        console.log(this._data);

        this.generateMarkup(this._data);


    };

    renderError(){
        //render error//
        const markup=`<div class='error'>error</div>`
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    clear(){
        //clear parent el
        this._parentElement.innerHTML='';//this parent el is the one on the instances///

    }
    renderSpiner(){
        const markup=`<div></div>`
    }


}