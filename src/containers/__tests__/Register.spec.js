// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../Register';


describe('Register test', () => {
  it('Register should match snapshot', () => {
    const component = renderer.create(
        <div>
      </div>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
