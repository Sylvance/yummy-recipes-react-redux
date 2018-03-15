import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

      let url = null
      let theComponent = this.props.forComponent
      if (theComponent === 'category') {
        url = `/api/users/${this.props.id}/categories?title=${this.state.title}`
      } else {
        url = `/api/categories/${this.props.id}/recipes?title=${this.state.title}`
      }
      this.props.onSearch(url)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form name="form" onSubmit={this.handleSearch}>
        <input type="text"
            placeholder="Title"
            autoFocus="true"
            name="title"
            onChange={this.handleChange} />
        <input type="submit" value="Search by title" />
      </form>
    )
  }
}
