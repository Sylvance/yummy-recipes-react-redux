import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CategoryHeader from '../components/CategoryHeader'
import CategoryMainSection from '../components/CategoryMainSection'

import * as Actions from '../actions'

const Category = ({categories, meta, userid, actions}) => (
  <div>
    <CategoryHeader  addCategory={actions.addCategory} fetchCategories={actions.fetchCategories} userid={userid}/>
    <CategoryMainSection userid={userid} meta={meta} categories={categories} actions={actions} />
  </div>
)

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  userid: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories,
  meta: state.meta,
  userid: JSON.parse(localStorage.getItem('userid'))
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
