// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RegisterComponent from '../RegisterComponent';

describe('RegisterComponent test', () => {
  it('RegisterComponent should match snapshot', () => {
    const component = renderer.create(
      <RegisterComponent registerUser={() => {}} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
