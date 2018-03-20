import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames'
import { Row, Col } from 'reactstrap';
import Paginator from './Pagination'
import Search from './Search'

import CategoryItem from './CategoryItem'


export default class CategoryMainSection extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    userid: PropTypes.number.isRequired
  }

  componentDidMount() {
      this.props.actions.fetchCategories(this.props.userid)
  }

  handlePageChange = (url) => {
    this.props.actions.fetchCategories(this.props.userid, url)
  }

  render() {
    const { categories, actions } = this.props

    return (
      <section>
        <Search
          forComponent='category'
          id={this.props.userid}
          onSearch={this.handlePageChange}/>
        <span> Double Click Category's Title to Edit</span>
        <ul className="items">
          {categories.map(category =>
            <CategoryItem key={category.id} userid={this.props.userid} category={category} {...actions} />
          )}
        </ul>
        <a href={`/category`}>All categories</a>
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
