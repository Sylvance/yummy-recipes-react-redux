import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RegisterFormInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string
  }

  state = {
    username: this.props.username || '',
    email: this.props.email || '',
    password: this.props.password || '',
    firstname: this.props.firstname || '',
    lastname: this.props.lastname || ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username, email, password, firstname, lastname } = this.state;
    this.props.onSave(username, email, password, firstname, lastname)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
        <Form name="form" onSubmit={this.handleSubmit}>
            <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text"
                placeholder="Enter your username"
                autoFocus="true"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required/>
            </FormGroup>
            <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email"
                placeholder="Enter your email"
                autoFocus="true"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required/>
            </FormGroup>
            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password"
                placeholder="Enter your password"
                autoFocus="true"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required/>
            </FormGroup>
            <FormGroup>
            <Label for="firstname">First name</Label>
            <Input type="text"
                placeholder="Enter your first name"
                autoFocus="true"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
                required/>
            </FormGroup>
            <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input type="text"
                placeholder="Enter your last name"
                autoFocus="true"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                required/>
            </FormGroup>
            <Button color="success">Register</Button>
        </Form>
    )
  }
}
