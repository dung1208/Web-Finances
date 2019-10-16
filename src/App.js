import React,{Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";


class App extends Component {
  render () {
      return (
    <div className="App">
       <Header />
       <Screen1 />
       <Screen2 />
       <Screen3 />
       <Screen4 />
       <Screen5 />
    </div>

          );
    }
}
export default App;
