import React,{Component} from 'react';
import '../scss/Screen1.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Screen1 extends Component {
  render () {
    return (
        <div className="screen-1">
            <div className="header-screen-1">
                <div className="img-logo-screen-1">
                   <a><img src={ require('../img/logo1.png') } alt="logo"/> </a>      
                </div>
                <div className="menu">
                    <ul className="menu-list" >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><FontAwesomeIcon className="icon-search-menu" icon={faSearch} /></li>
                    </ul>
                    <ul className="menu-list menu-responsive" >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><FontAwesomeIcon className="icon-search-menu-responsive" icon={faSearch} /></li>
                    </ul>
                </div>
                <div className='show-menu-screen-1 show-menu'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="slogan">
                <h2>
                    <span className="solgan-above">Giving financial <em><span>solutions</span></em></span>
                    <span>and security worldwide</span>
                </h2>
            </div>
        </div>

        );
    }
}
export default Screen1;