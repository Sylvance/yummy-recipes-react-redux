// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RecipeHeader from '../RecipeHeader';

describe('RecipeHeader test', () => {
  it('RecipeHeader should match snapshot', () => {
    const component = renderer.create(
      <RecipeHeader
        addRecipe={() => {}}
        categoryid={42}
        categoryname={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
