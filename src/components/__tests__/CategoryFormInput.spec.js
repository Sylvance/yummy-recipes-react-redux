// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryFormInput from '../CategoryFormInput';

describe('CategoryFormInput test', () => {
  it('CategoryFormInput should match snapshot', () => {
    const component = renderer.create(
      <CategoryFormInput
        onSave={() => {}}
        userid={42}
        title={'defaultString'}
        description={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
