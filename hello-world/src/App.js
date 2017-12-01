import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React!",
      contentText: "Content"
    };
  }


  render() {
    return (
      <div className="App">
        <h1>{this.state.headerText}</h1>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <p className="App-intro">
        <h1>My Page Starts Here</h1>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
}

export default App;
