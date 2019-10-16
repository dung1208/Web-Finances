import React,{Component} from 'react';
import '../scss/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {
  render () {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="block-element-footer">
                    <img alt="logo" src={require('../img/logo1.png')} />
                    <p>We are ambitioned team that knows how to deliver the best results for our clients. We do our work in the highest priority</p>
                </div>
                <div className="block-element-footer">
                    <h3>PAGES</h3>
                    <ul className="hover-footer">
                        <li><a>Insurance</a></li>
                        <li><a>Planning</a></li>
                        <li><a>Consulting</a></li>
                        <li><a>Best Experience</a></li>
                    </ul>
                </div>
                <div className="block-element-footer">
                    <h3>USEFUL LINKS</h3>
                    <ul className="hover-footer">
                        <li><a>FAQ</a></li>
                        <li><a>Cookies</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Experts</a></li>
                    </ul>
                </div>
                <div className="block-element-footer">
                    <h3>ABOUT US</h3>
                    <ul className="about-footer">
                        <li><FontAwesomeIcon className="icon-about-footer" icon={faMap} />Streed address 15, City</li>
                        <li><FontAwesomeIcon className="icon-about-footer" icon={faPhoneAlt} />+321 97654387</li>
                        <li><FontAwesomeIcon className="icon-about-footer" icon={faEnvelope} />emailaddress@company.com</li>
                        <li><FontAwesomeIcon className="icon-about-footer" icon={faClock} />9:00-18:00</li>
                    </ul>
                </div>
            </div>
            <div className="copyright-footer">
                <p>Copyright 2019 Shufflehound. All rights reserved.</p>
            </div>
        </div>

        );
    }
}
export default Footer;