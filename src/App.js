import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Category from './Category'
import Recipe from './Recipe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/category'>Categoryr</Link></li>
              <li><Link to='/recipe'>Recipe</Link></li>
            </ul>
          </nav>  
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Yummy Recipes</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-intro">
          Yummy recipes provides a platform for users to keep track of their awesome 
          recipes and share with others if they so wish.
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/category' component={Category}/>
            <Route path='/recipe' component={Recipe}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
