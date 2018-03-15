import { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginComponent extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.logoutUser()
  }

  render() {
    return null;
  }
}

