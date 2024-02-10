export default class View{
    _data;

    render(data){
        console.log('do something');
        this._data=data;

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