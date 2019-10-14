import React,{Component} from 'react';
import '../scss/ElementScreen3.scss';
class ElementScreen3 extends Component {
  render () {
    return (
        <div className="element-screen-3">
            <div className="text-element-screen-3">
                <a><img alt="angle-right" src={require('../img/angle.PNG')} /></a>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="box-img-element-screen-3">
                <img alt= {this.props.title} src= {this.props.image} className="img-element-screen-3"/>
            </div>
        </div>

        );
    }
}
export default ElementScreen3;