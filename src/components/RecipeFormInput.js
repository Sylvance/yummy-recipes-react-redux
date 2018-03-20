import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types'

export default class RecipeFormInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    categoryid: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  }

  state = {
    categoryid: this.props.categoryid || '',
    title: this.props.title || '',
    description: this.props.description || ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { categoryid, title, description } = this.state;
    this.props.onSave(categoryid, title, description)
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
                onChange={this.handleChange}
                required />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" 
                name="description" 
                id="description"
                placeholder="Provide a description"
                onChange={this.handleChange}
                required />
        </FormGroup>
        <Button color="success">Add Recipe</Button>
      </Form>
    )
  }
}
