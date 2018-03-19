// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryHeader from '../CategoryHeader';

describe('CategoryHeader test', () => {
  it('CategoryHeader should match snapshot', () => {
    const component = renderer.create(
      <CategoryHeader addCategory={() => {}} userid={42} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
