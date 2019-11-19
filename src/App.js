import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mnav from './components/Mnav';
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Mnav></Mnav>
        <main>
          <div className="bgContainer d-flex">
  
          <div className="w-50">
            <img src="/img/Canva - A Door Knob.jpg" alt="left" id="leftBg"/>
          </div>
          <div className="w-50">
          <img src="/img/Canva - Black Farmed Eyeglasses in Front of Laptop Computer.jpg" alt="right" id="rightBg"/>
          </div>
          </div>
          <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
