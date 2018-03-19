// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import LogoutComponent from '../LogoutComponent';

describe('LogoutComponent test', () => {
  it('LogoutComponent should match snapshot', () => {
    const component = renderer.create(
      <LogoutComponent logoutUser={() => {}} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
