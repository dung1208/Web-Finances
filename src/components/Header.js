import React,{Component} from 'react';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
  render () {
      return (
        <div className="header">
            <div className="img-logo">
                <a><img src={ require('../img/logo2.png') } alt="logo"/></a>      
            </div>
            <div className="nav">
              <ul className="nav-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><FontAwesomeIcon className="icon-search" icon={faSearch} /></li>
              </ul>
            </div>
        </div>
          );
    }
}
export default Header;