// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryItem from '../CategoryItem';


describe('CategoryItem test', () => {
  it('CategoryItem should match snapshot', () => {
    const component = renderer.create(
      <CategoryItem
        key={1} userid={1} category={{}} actions={{}}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
