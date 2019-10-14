import React,{Component} from 'react';
import '../scss/Screen2.scss';
import ElementScreen2 from "./ElementScreen2";
class Screen2 extends Component {
  render () {
    return (
            <div>
                    <div className="screen-2">
                        <div className="element-first-screen-2">
                            <h2>Growing your business and helping with organizing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dui tempus, vestibulum tellus a gravi</p>
                            <button className="btn-contact-screen-2">Contact us</button>
                        </div>
                        <ElementScreen2 
                            image = "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-1.png"
                            title = "Increasing value"
                            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem arcu, dapibus fringilla dolor aliquet ut."
                        />
                        <ElementScreen2 
                            image = "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/benifits-2.png"
                            title = "Optimal vision"
                            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras seddui tempus, vestibulum tellus a, gravida orci"
                        />
                    </div>
                    <div className="background-screen-2"></div>
            </div>
        );
    }
}
export default Screen2;