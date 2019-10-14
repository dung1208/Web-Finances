import React,{Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
class App extends Component {
  render () {
      return (
    <div className="App">
        <Header />
       <Screen1 />
       <Screen2 />
       <Screen3 />
    </div>

          );
    }
}
export default App;
