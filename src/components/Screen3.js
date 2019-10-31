import React,{Component} from 'react';
import '../scss/Screen3.scss';
import ElementScreen3 from "./ElementScreen3";
class Screen3 extends Component {
  render () {
    return (
        <div className="screen-3">
            <div className="header-screen-3">
                <h2>What we can offer</h2> 
                <p>to increase financial security for your business</p>
            </div>
            <div className="list-element-screen-3" >
                <ElementScreen3
                    title = "Finances"
                    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem."
                    image = "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/03/undraw_folder_39kl.jpg"
                />
                <ElementScreen3 
                    title = "Consulting"
                    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem."
                    image = "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/07/we-offer-2-1.png"
                />
                <ElementScreen3 
                    title = "Insurance"
                    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem."
                    image = "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/26/2019/03/insurance.jpg"
                />
            </div>
        </div>

        );
    }
}
export default Screen3;