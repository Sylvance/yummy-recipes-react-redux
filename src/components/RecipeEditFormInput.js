import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types'

export default class RecipeEditFormInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    id: PropTypes.number,
    categoryid: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }

  state = {
    id: this.props.id || '',
    categoryid: this.props.categoryid || '',
    title: this.props.title || '',
    description: this.props.description || ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { id, categoryid, title, description } = this.state;
    this.props.onSave(id, categoryid, title, description)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Form name="form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" 
                name="title" 
                id="title" 
                placeholder="Title"
                value={this.state.title} 
                onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" 
                name="description" 
                id="description"
                placeholder="Provide a description"
                value={this.state.description}
                onChange={this.handleChange} />
        </FormGroup>
        <Button color="info">Edit Recipe</Button>
      </Form>
    )
  }
}
