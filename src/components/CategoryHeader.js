import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CategoryFormInput from './CategoryFormInput'

export default class CategoryHeader extends Component {
  static propTypes = {
    addCategory: PropTypes.func.isRequired,
    userid: PropTypes.number.isRequired
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


  handleSave = (userid, title, description) => {
    if (title.length !== 0) {
      this.props.addCategory(userid, title, description)
    }
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <header className="header">
        <h1>Categories</h1>
        <Button color="primary" onClick={this.toggle}>Click here to add a category</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Category</ModalHeader>
          <ModalBody>
            <CategoryFormInput onSave={this.handleSave} userid={this.props.userid}/>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </header>
    )
  }
}
