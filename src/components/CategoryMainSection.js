import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames'
import { Row, Col } from 'reactstrap';
import Paginator from './Pagination'

import CategoryItem from './CategoryItem'
import { SHOW_ALL } from '../constants/Filters'

const CATEGORY_FILTERS = {
  [SHOW_ALL]: () => true
}

export default class CategoryMainSection extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    userid: PropTypes.number.isRequired
  }

  state = { filter: SHOW_ALL }

  componentDidMount() {
      this.props.actions.fetchCategories(this.props.userid)
  }

  handlePageChange = (url) => {
    this.props.actions.fetchCategories(this.props.userid, url)
  }

  render() {
    const { categories, actions } = this.props
    const { filter } = this.state

    const filteredCategories = categories.filter(CATEGORY_FILTERS[filter])

    return (
      <section>
        <ul className="items">
          {filteredCategories.map(category =>
            <CategoryItem key={category.id} userid={this.props.userid} category={category} {...actions} />
          )}
        </ul>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Paginator
              page={this.props.meta.page} 
              pages={this.props.meta.pages} 
              limit={this.props.meta.limit}
              total={this.props.meta.total}
              links={this.props.meta.links}
              forComponent='category'
              id={this.props.userid}
              onPageChange={this.handlePageChange}/>
          </Col>
        </Row>
      </section>
    )
  }

  
}
