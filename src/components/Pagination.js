import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import classnames from 'classnames'

export default class Paginator extends Component {
  static propTypes = {
    onPageChange: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    forComponent: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired
  }

  state = {
    paginated: true,
    pageNumber: this.props.page
  }

  componentDidMount () {
      if (this.props.pages === 1) {
        this.setState({ paginated: false })
      }
  }

  handleChange = (pageNumber) => {
      let url = null
      let theComponent = this.props.forComponent
      if (theComponent === 'category') {
        url = `/api/users/${this.props.id}/categories?page=${pageNumber}`
      } else {
        url = `/api/categories/${this.props.id}/recipes?page=${pageNumber}`
      }
      this.props.onPageChange(url)
  }

  render() {

    let element
    if (this.state.paginated) {
        let pager = []
        for (let index = 0; index < this.props.pages; index++) {
            pager[index] = index
        }
        element = (pager.map(item => <PaginationItem key={item}className={classnames({
          paginated: this.state.paginated
        })} onClick={() => this.handleChange(item+1)}>
            <PaginationLink>
            {item+1}
            </PaginationLink>
        </PaginationItem> ))
        
    } else {
      element = (
        <PaginationItem>
            <PaginationLink>
              1
            </PaginationLink>
        </PaginationItem>
      )
    }

    return (
      <Pagination>
        {element}
      </Pagination>
    )
  }
}
