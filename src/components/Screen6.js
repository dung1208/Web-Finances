import React,{Component} from 'react';
import '../scss/Screen6.scss';
class Screen6 extends Component {
  render () {
    return (
        <div className="screen-6">
            <div className="header-screen-6">
                <h2>Our clients</h2>
                <p>For more than 45 years of collaboration</p>
            </div>
            <div className="list-clients-screen-6">
                <div className="element-client-screen-6">
                    <img alt="quotes" src = { require('../img/quotes.PNG')} />
                    <p>Lorem ipsum dolor sit amet, consec- tetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a, gravida orci.</p>
                    <p>Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem</p>
                    <h2>John Doe</h2>
                    <p><em>Project Manager</em></p>
                    <p><em>Coporate Inc</em></p>
                </div>
                <div className="element-client-screen-6">
                    <img alt="quotes" src = { require('../img/quotes.PNG')} />
                    <p>Lorem ipsum dolor sit amet, consec- tetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a, gravida orci.</p>
                    <p>Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem</p>
                    <h2>Keith Kenning</h2>
                    <p><em>CEO</em></p>
                    <p><em>Finances for you Ltd</em></p>
                </div>
                <div className="element-client-screen-6">
                    <img alt="quotes" src = { require('../img/quotes.PNG')} />
                    <p>Lorem ipsum dolor sit amet, consec- tetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a, gravida orci.</p>
                    <p>Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem</p>
                    <h2>Filip Burton</h2>
                    <p><em>Accountant</em></p>
                    <p><em>Block Inc</em></p>
                </div>
            </div>
        </div>

        );
    }
}
export default Screen6;