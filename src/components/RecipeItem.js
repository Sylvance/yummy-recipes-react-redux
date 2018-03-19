import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom'
import RecipeEditFormInput from './RecipeEditFormInput'

export default class RecipeItem extends Component {
  static propTypes = {
    categoryid: PropTypes.number.isRequired,
    recipe: PropTypes.object.isRequired,
    editRecipe: PropTypes.func.isRequired,
    deleteRecipe: PropTypes.func.isRequired,
    fetchRecipes: PropTypes.func.isRequired
  }

  state = {
    editing: false,
    categoryid: this.props.categoryid
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, categoryid, title, description) => {
    if (title.length === 0) {
      this.props.deleteRecipe(id, categoryid)
      this.props.fetchRecipes(categoryid)
    } else {
      this.props.editRecipe(id, categoryid, title, description)
      this.props.fetchRecipes(categoryid)
    }
    this.setState({ editing: false })
  }

  render() {
    const { recipe, deleteRecipe } = this.props

    let element
    if (this.state.editing) {
      element = (
        <RecipeEditFormInput onSave={this.handleSave}
                        id={recipe.id}
                        categoryid={this.state.categoryid}
                        title={recipe.title}
                        description={recipe.description} />
      )
    } else {
      element = (
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading onDoubleClick={this.handleDoubleClick}>
              {recipe.title}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {recipe.description}
            </ListGroupItemText>
            <Badge pill color='danger' onClick={() => deleteRecipe(recipe.id, this.state.categoryid)}>
              Delete
            </Badge>
            <a href={`/category`}> Back to categories</a>
          </ListGroupItem>
        </ListGroup>
      )
    }

    return (
      <li className={classnames({
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
