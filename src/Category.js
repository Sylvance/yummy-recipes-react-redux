import React, { Component } from 'react';
import logo from './logo.svg';
import './Category.css';

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <header className="Category-header">
          <img src={logo} className="Category-logo" alt="logo" />
          <h1 className="Category-title">Categories Page</h1>
        </header>
        <p className="Category-intro">
          To get started, edit <code>src/Category.js</code> and save to reload.
        </p>
        <div className="Category-intro">
          Yummy recipes provides a platform for users to keep track of their awesome 
          recipes and share with others if they so wish.
        </div>
      </div>
    );
  }
}

export default Category;
