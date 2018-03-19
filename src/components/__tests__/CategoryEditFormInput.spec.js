// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryEditFormInput from '../CategoryEditFormInput';

describe('CategoryEditFormInput test', () => {
  it('CategoryEditFormInput should match snapshot', () => {
    const component = renderer.create(
      <CategoryEditFormInput
        onSave={() => {}}
        id={42}
        user_id={42}
        title={'defaultString'}
        description={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
