import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import CategoryEditFormInput from './CategoryEditFormInput'

export default class CategoryItem extends Component {
  static propTypes = {
    userid: PropTypes.number.isRequired,
    category: PropTypes.object.isRequired,
    editCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired
  }

  state = {
    editing: false,
    user_id: this.props.userid
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, user_id, title, description) => {
    if (title.length === 0) {
      this.props.deleteCategory(id, user_id)
      this.props.fetchCategories(user_id)
    } else {
      this.props.editCategory(id, user_id, title, description)
      this.props.fetchCategories(user_id)
    }
    this.setState({ editing: false })
  }

  render() {
    const { category, deleteCategory } = this.props

    let element
    if (this.state.editing) {
      element = (
        <CategoryEditFormInput onSave={this.handleSave}
                          id={category.id}
                          user_id={this.state.user_id}
                          title={category.title}
                          description={category.description} />
      )
    } else {
      element = (
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading onDoubleClick={this.handleDoubleClick}>
              {category.title}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {category.description}
              <span> Double Click Title to Edit</span>
              <br/>
              <a href={`/categories/${category.name}/${category.id}/recipes`}>View Recipes</a>
            </ListGroupItemText>
            <Badge pill color='danger' onClick={() => deleteCategory(category.id, this.state.user_id)}>
              Delete
            </Badge>
          </ListGroupItem>
        </ListGroup>
      )
    }

    return (
      <li className={classnames({
        editing: this.state.editing,
        item: true
      })}>
        {element}
      </li>
    )
  }
}
