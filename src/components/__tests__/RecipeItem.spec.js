// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RecipeItem from '../RecipeItem';


describe('RecipeItem test', () => {
  it('RecipeItem should match snapshot', () => {
    const component = renderer.create(
      <RecipeItem
        key={1} categoryid={1} recipe={{}} actions={{}}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
