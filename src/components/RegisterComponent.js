import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegisterFormInput from './RegisterFormInput'

export default class RegisterComponent extends Component {
  static propTypes = {
    registerUser: PropTypes.func.isRequired
  }

  handleSave = (username, email, password, firstname, lastname) => {
    if (email.length !== 0) {
      this.props.registerUser(username, email, password, firstname, lastname)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Register</h1>
        <RegisterFormInput onSave={this.handleSave} />
      </header>
    )
  }
}

