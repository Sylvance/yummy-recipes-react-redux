import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginFormInput from './LoginFormInput'

export default class LoginComponent extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  }

  handleSave = (email, password) => {
    if (email.length !== 0) {
      this.props.loginUser(email, password)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Login</h1>
        <LoginFormInput onSave={this.handleSave} />
      </header>
    )
  }
}

