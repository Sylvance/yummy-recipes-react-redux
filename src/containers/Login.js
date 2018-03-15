import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginComponent from '../components/LoginComponent'

import * as Actions from '../actions'

const Login = ({actions}) => (
  <div>
    <LoginComponent loginUser={actions.loginUser} />
  </div>
)

Login.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  authentication: state.auth
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
