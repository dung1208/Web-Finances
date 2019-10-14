import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



window.onscroll = () => {
    let header = document.getElementsByClassName('header');
    let scrollTop = document.documentElement.scrollTop;
        if(scrollTop ){
            header[0].style.visibility = "visible";
            }
        else if (scrollTop === 0 ){
            header[0].style.visibility = "hidden";
            }
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
