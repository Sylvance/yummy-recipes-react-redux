// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RecipeEditFormInput from '../RecipeEditFormInput';

describe('RecipeEditFormInput test', () => {
  it('RecipeEditFormInput should match snapshot', () => {
    const component = renderer.create(
      <RecipeEditFormInput
        onSave={() => {}}
        id={42}
        categoryid={42}
        title={'defaultString'}
        description={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
