// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import LoginFormInput from '../LoginFormInput';

describe('LoginFormInput test', () => {
  it('LoginFormInput should match snapshot', () => {
    const component = renderer.create(
      <LoginFormInput
        onSave={() => {}}
        email={'defaultString'}
        password={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
