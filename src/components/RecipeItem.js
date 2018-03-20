import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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
    categoryid: this.props.categoryid,
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

  handleSave = (id, categoryid, title, description) => {
    this.props.editRecipe(id, categoryid, title, description)
    this.props.fetchRecipes(categoryid)
    this.setState({ editing: false })
    this.toggle()
  }

  render() {
    const { recipe, deleteRecipe } = this.props

    let element
    if (this.state.editing) {
      element = (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Recipe</ModalHeader>
          <ModalBody>
            <RecipeEditFormInput onSave={this.handleSave}
                        id={recipe.id}
                        categoryid={this.state.categoryid}
                        title={recipe.title}
                        description={recipe.description} />
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
              {recipe.title}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {recipe.description}
            </ListGroupItemText>
            <Badge pill color='danger' onClick={() => {
                                            deleteRecipe(recipe.id, this.state.categoryid)
                                            this.props.fetchRecipes(this.state.categoryid)
                                        }}>
              Delete
            </Badge>
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
