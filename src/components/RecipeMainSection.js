import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paginator from './Pagination'
import Search from './Search'

import RecipeItem from './RecipeItem'
import { SHOW_ALL } from '../constants/Filters'

const RECIPE_FILTERS = {
  [SHOW_ALL]: () => true
}

export default class RecipeMainSection extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    categoryid: PropTypes.number.isRequired
  }

  state = { filter: SHOW_ALL }

  componentDidMount() {
    this.props.actions.fetchRecipes(this.props.categoryid)
  }

  handlePageChange = (url) => {
    this.props.actions.fetchRecipes(this.props.categoryid, url)
  }

  render() {
    const { recipes, actions } = this.props
    const { filter } = this.state

    const filteredRecipes = recipes.filter(RECIPE_FILTERS[filter])

    return (
      <section>
        <span> 
          <Search
          forComponent='recipe'
          id={this.props.categoryid}
          onSearch={this.handlePageChange}/>
          Double Click Recipe's Title to Edit
        </span>
        <ul className="items">
          {filteredRecipes.map(recipe =>
            <RecipeItem key={recipe.id} className="item" categoryid={this.props.categoryid} recipe={recipe} {...actions} />
          )}
        </ul>
        <a href={`/category`}> Back to categories</a>
        <Paginator
          page={this.props.meta.page} 
          pages={this.props.meta.pages} 
          limit={this.props.meta.limit}
          total={this.props.meta.total}
          links={this.props.meta.links}
          forComponent='recipe'
          id={this.props.categoryid}
          onPageChange={this.handlePageChange}/>
      </section>
    )
  }
}
