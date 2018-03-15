import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LogoutComponent from '../components/LogoutComponent'

import * as Actions from '../actions'

const Logout = ({actions}) => (
  <div>
    <LogoutComponent logoutUser={actions.logoutUser} />
  </div>
)

Logout.propTypes = {
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
)(Logout)
