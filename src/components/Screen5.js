import React,{Component} from 'react';
import '../scss/Screen5.scss';
class Screen5 extends Component {
  render () {
    return (
        <div className="screen-5">
          <div className="container-screen-5">
            <span>Subscribe to our <em>newletter</em></span>
            <p>You will receive newest information about our projects, investments</p>
            <p>partners and other important information.</p>
            <div className="email-box-screen-5">
              <form action="#">
                <input className="email-text-screen-5" type="email" placeholder="Enter your email" />
                <input className="email-btn-screen-5" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>

        );
    }
}
export default Screen5;