import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginFormInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string
  }

  state = {
    email: this.props.email || '',
    password: this.props.password || ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.onSave(email, password)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
        <form name="form" onSubmit={this.handleSubmit}>
            <input type="email"
                placeholder="Enter your email"
                autoFocus="true"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required />
            <input type="password"
                placeholder="Enter your password"
                autoFocus="true"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required />
            <input type="submit" value="Login" />
        </form>
    )
  }
}
