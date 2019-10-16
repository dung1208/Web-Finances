import React,{Component} from 'react';
import '../scss/Screen7.scss';
class Screen7 extends Component {
  render () {
    return (
        <div className="screen-7">
            <div className="box-logo-screen-7">
                <div className="logo-screen-7">
                    <a><img alt="logo1" src={require('../img/logo1-screen7.png')} /></a>
                </div>
                 <div className="logo-screen-7">
                    <a><img alt="logo2" src={require('../img/logo2-screen7.png')} /></a>
                </div>
                 <div className="logo-screen-7">
                    <a><img alt="logo3" src={require('../img/logo3-screen7.png')} /></a>
                </div>
                 <div className="logo-screen-7">
                    <a><img alt="logo4" src={require('../img/logo4-screen7.png')} /></a>
                </div>
                 <div className="logo-screen-7">
                    <a><img alt="logo5" src={require('../img/logo5-screen7.png')} /></a>
                </div>
            </div>
            <div className="space-divider"></div>
            <div className="contact-screen-7">
                <div className="text-screen7">
                    <span><em>Contact us</em> to receive</span>
                    <span>any further information</span>
                </div>
                <div className="btn-screen-7">
                    <button>Contact us</button>
                </div>
            </div>
        </div>

        );
    }
}
export default Screen7;