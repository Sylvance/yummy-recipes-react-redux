// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RegisterFormInput from '../RegisterFormInput';

describe('RegisterFormInput test', () => {
  it('RegisterFormInput should match snapshot', () => {
    const component = renderer.create(
      <RegisterFormInput
        onSave={() => {}}
        username={'defaultString'}
        email={'defaultString'}
        password={'defaultString'}
        firstname={'defaultString'}
        lastname={'defaultString'}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
