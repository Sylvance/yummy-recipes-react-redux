import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    forComponent: PropTypes.string.isRequired
  }

  state = {
    title: this.props.title || ''
  }

  handleSearch = (e) => {
      e.preventDefault(); 

      const { name, value } = e.target;
      this.setState({ [name]: value })
      setTimeout(this.handleSave, 300)
  }

  handleSave = () => {
    let url = null
      let theComponent = this.props.forComponent
      if (theComponent === 'category') {
        url = `/api/users/${this.props.id}/categories?title=${this.state.title}`
      } else {
        url = `/api/categories/${this.props.id}/recipes?title=${this.state.title}`
      }
      this.props.onSearch(url)
  }

  render() {
    return (
      <Form name="form">
        <FormGroup>
          <Label for="title">Search by title</Label>
          <Input type="text"
              placeholder="Title"
              autoFocus="true"
              name="title"
              onChange={this.handleSearch}
              required/>
        </FormGroup>
      </Form>
    )
  }
}
