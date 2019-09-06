import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Routes from "./routes"
ReactGA.initialize('UA-130176376-1');

ReactGA.pageview('/website/#/');

class App extends Component {
// TODO add new pageview url
  render() {
    return (
      <div className="App">
      <Routes/>
      </div>
    );
  }
  
}

export default App;
