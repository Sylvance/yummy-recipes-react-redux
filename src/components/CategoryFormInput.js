import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types'

export default class CategoryFormInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    userid: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  }

  state = {
    userid: this.props.userid || '',
    title: this.props.title || '',
    description: this.props.description || ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { userid, title, description } = this.state;
    this.props.onSave(userid, title, description)
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
                onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" 
                name="description" 
                id="description"
                placeholder="Provide a description"
                onChange={this.handleChange} />
        </FormGroup>
        <Button color="success">Add Category</Button>
      </Form>
    )
  }
}
