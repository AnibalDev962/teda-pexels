import * as model from '../model.js';

export default class View{
    _data;
    _screenWidth=window.screen.width;

    render(data){
       
        this._data=model.state.results.els;
        this._screenWidth<600?  this.generateMarkup(this._data,'small'): this.generateMarkup(this._data,'big')
      

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
        const markup='<ion-icon class="spiner" name="refresh-outline"></ion-icon>'

    }

    renderYear(){
        
      const dateForFooter=new Date();

      const yearForFooter=dateForFooter.getFullYear();
      //entering the year to the footer//

      const spanForYearInTheHtml=document.querySelector('.footer__credits__year-span');
      spanForYearInTheHtml.textContent=yearForFooter;

    };

    scrollToSection(section=this._parentElement){
        section.scrollIntoView({ behavior: 'smooth' });
    };


}