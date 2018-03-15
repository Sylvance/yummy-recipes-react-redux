import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecipeFormInput from './RecipeFormInput'

export default class RecipeHeader extends Component {
  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
    categoryid: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSave = (categoryid, title, description) => {
    if (title.length !== 0) {
      this.props.addRecipe(categoryid, title, description)
    }
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <header className="header">
        <h1>Recipes</h1>
        <Button color="primary" onClick={this.toggle}>Click here to add a recipe</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Recipe</ModalHeader>
          <ModalBody>
            <RecipeFormInput onSave={this.handleSave} categoryid={this.props.categoryid}/>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </header>
    )
  }
}
