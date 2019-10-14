import React,{Component} from 'react';
import '../scss/ElementScreen2.scss';
class ElementScreen2 extends Component {
  render () {
    return (
        <div className="element-screen-2">
            <img src= { this.props.image} alt={this.props.title}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
        </div>

        );
    }
}
export default ElementScreen2;