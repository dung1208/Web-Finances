import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onscroll = () => {
    let header = document.getElementsByClassName('header');
    let scrollTop = document.documentElement.scrollTop;
    let fadeInRightScreen4 = document.getElementsByClassName('img-right-screen-4');
    let fadeInLeftScreen4 = document.getElementsByClassName('left-screen-4');
    let fadeInRightScreen7 = document.getElementsByClassName('btn-screen-7');
    let fadeInLeftScreen7 = document.getElementsByClassName('text-screen-7');    
    console.log(scrollTop)
        if(scrollTop > 0){
            header[0].style.visibility = "visible";
            }
        else{
            header[0].style.visibility = "hidden";
            }
        if(scrollTop > 1350){
            fadeInRightScreen4[0].classList.add('img-fadeInRight-screen-4');
            fadeInLeftScreen4[0].classList.add('block-fadeInLeft-screen-4');
        }
        if(scrollTop > 3450){
            fadeInRightScreen7[0].classList.add('btn-fadeInRight-screen-7');
            fadeInLeftScreen7[0].classList.add('text-fadeInLeft-screen-7');
        } 
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
