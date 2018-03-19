
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';


describe('Pagination test', () => {
  it('Pagination should match snapshot', () => {
    const component = renderer.create(<Pagination
      onPageChange={() => {}} id={42} forComponent={"defaultString"} links={{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
