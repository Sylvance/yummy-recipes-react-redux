// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RecipeFormInput from '../RecipeFormInput';

describe('RecipeFormInput test', () => {
  it('RecipeFormInput should match snapshot', () => {
    const component = renderer.create(
      <RecipeFormInput
        onSave={() => {}}
        categoryid={42}
        title={'defaultString'}
        description={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
