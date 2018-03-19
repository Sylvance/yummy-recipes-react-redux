// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('Search test', () => {
  it('Search should match snapshot', () => {
    const component = renderer.create(
      <Search onSearch={() => {}} id={42} forComponent={'defaultString'} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
