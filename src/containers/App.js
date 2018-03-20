import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';

import Notification from 'react-notify-toast';

import Home from './Home'
import Category from './Category'
import Recipe from './Recipe'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let element
    if (localStorage.getItem('token')) {
      element = (
       <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href='/category'>Category</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/logout'>Logout</NavLink>
          </NavItem>
        </Nav>
      )
    } else {
      element = (
       <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href='/login'>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/register'>Register</NavLink>
          </NavItem>
        </Nav>
      )
    }
    return (
      <div>
          <Notification/>
          <Container>
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">Yummy Recipes</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  {element}
              </Collapse>
            </Navbar>
            <Row>
              <Col>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/category' component={Category}/>
                    <Route path='/categories/:categoryname/:categoryid/recipes' component={Recipe}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/register' component={Register}/>
                </Switch>
              </Col>
            </Row>  
          </Container>
      </div>
    );
  }
}

export default App;
