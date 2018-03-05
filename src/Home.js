import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Home Page</h1>
            </header>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div className="App-intro">
            Yummy recipes provides a platform for users to keep track of their awesome 
            recipes and share with others if they so wish.
            </div>
        </div>
    );
  }
}

export default Home;
