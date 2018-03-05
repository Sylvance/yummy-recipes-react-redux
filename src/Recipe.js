import React, { Component } from 'react';
import logo from './logo.svg';
import './Recipe.css';

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <header className="Recipe-header">
          <img src={logo} className="Recipe-logo" alt="logo" />
          <h1 className="Recipe-title">Recipes Page</h1>
        </header>
        <p className="Recipe-intro">
          To get started, edit <code>src/Recipe.js</code> and save to reload.
        </p>
        <div className="Recipe-intro">
          Yummy recipes provides a platform for users to keep track of their awesome 
          recipes and share with others if they so wish.
        </div>
      </div>
    );
  }
}

export default Recipe;
