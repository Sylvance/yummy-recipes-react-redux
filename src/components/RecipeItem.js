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
    deleteRecipe: PropTypes.func.isRequired
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
    } else {
      this.props.editRecipe(id, categoryid, title, description)
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
        // <div>
        //   <label onDoubleClick={this.handleDoubleClick}>
        //     {recipe.title}
        //   </label>
        //   <span onDoubleClick={this.handleDoubleClick}>
        //     {recipe.description}
        //   </span>
        //   <button className="destroy"
        //           onClick={() => deleteRecipe(recipe.id, this.state.categoryid)} />
        // </div>

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
            <Link to={`/category`}> Back to categories</Link>
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
