import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CategoryHeader from '../components/CategoryHeader'
import CategoryMainSection from '../components/CategoryMainSection'
import RecipeHeader from '../components/RecipeHeader'
import RecipeMainSection from '../components/RecipeMainSection'
import * as Actions from '../actions'

const App = ({categories, recipes, actions}) => (
  <div>
    <CategoryHeader addCategory={actions.addCategory} />
    <CategoryMainSection categories={categories} actions={actions} />
    <RecipeHeader addRecipe={actions.addRecipe} />
    <RecipeMainSection recipes={recipes} actions={actions} />
  </div>
)

App.propTypes = {
  categories: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories,
  recipes: state.recipes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
