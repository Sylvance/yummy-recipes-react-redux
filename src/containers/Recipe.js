import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RecipeHeader from '../components/RecipeHeader'
import RecipeMainSection from '../components/RecipeMainSection'

import * as Actions from '../actions'

const Recipe = ({recipes, categoryid, categoryname, meta, actions, props}) => (
  <div>
    <RecipeHeader addRecipe={actions.addRecipe} fetchRecipes={actions.fetchRecipes} categoryid={categoryid} categoryname={categoryname} />
    <RecipeMainSection categoryid={categoryid} categoryname={categoryname} meta={meta} recipes={recipes} actions={actions} />
  </div>
)

Recipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  categoryid: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  recipes: state.recipes,
  meta: state.meta,
  categoryid: parseInt(props.match.params.categoryid, 10),
  categoryname: props.match.params.categoryname
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)
