import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RegisterComponent from '../components/RegisterComponent'

import * as Actions from '../actions'

const Register = ({actions}) => (
  <div>
    <RegisterComponent registerUser={actions.registerUser} />
  </div>
)

Register.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
