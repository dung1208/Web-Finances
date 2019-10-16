import React,{Component} from 'react';
import '../scss/Screen4.scss';
class Screen4 extends Component {
  render () {
    return (
        <div className="screen-4">
            <div className="left-screen-4">
                <div className="title-screen-4">
                    <h2>Driven to deliver</h2>
                    <h2>Complete collaboration</h2>
                </div>
                <div className="list-element-left-screen-4">
                    <div className="element-left-screen-4">
                        <div className="icon-element-screen-4">
                            <img alt="transparency" src = { require('../img/transparency.PNG')} />
                        </div>
                        <div className="text-element-screen-4">
                            <h3>Transparency</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.</p>
                        </div>
                    </div>
                    <div className="divider"><div className="divider-line"></div></div>
                    <div className="element-left-screen-4">
                        <div className="icon-element-screen-4">
                            <img alt="protection" src = { require('../img/protection.PNG')} />
                        </div>
                        <div className="text-element-screen-4">
                            <h3>Protection</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.</p>
                        </div>
                    </div>
                    <div className="divider"><div className="divider-line"></div></div>
                    <div className="element-left-screen-4">
                        <div className="icon-element-screen-4">
                            <img alt="compliance" src = { require('../img/compliance.PNG')} />
                        </div>
                        <div className="text-element-screen-4 last-text-element-screen-4">
                            <h3>Compliance</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-right-screen-4">
                <img alt="screen-4" src = { require('../img/img-screen4.png')} />
            </div>
        </div>

        );
    }
}
export default Screen4;