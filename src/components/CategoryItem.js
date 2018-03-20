import React, { Component } from 'react'
import { Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter, 
        ListGroup, 
        ListGroupItem, 
        ListGroupItemHeading, 
        ListGroupItemText, 
        Badge } from 'reactstrap';
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
    user_id: this.props.userid,
    modal: false
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
    this.toggle()
  }

  handleSave = (id, user_id, title, description) => {
    this.props.editCategory(id, user_id, title, description)
    this.props.fetchCategories(user_id)
    this.setState({ editing: false })
    this.toggle()
  }

  render() {
    const { category, deleteCategory } = this.props

    let element
    if (this.state.editing) {
      element = (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Category</ModalHeader>
          <ModalBody>
            <CategoryEditFormInput onSave={this.handleSave}
                            id={category.id}
                            user_id={this.state.user_id}
                            title={category.title}
                            description={category.description} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
              <a href={`/categories/${category.title}/${category.id}/recipes`}>View Recipes</a>
            </ListGroupItemText>
            <Badge pill color='danger' onClick={() => {
                                                  deleteCategory(category.id, this.state.user_id)
                                                  this.props.fetchCategories(this.state.user_id)
                                              }}>
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
