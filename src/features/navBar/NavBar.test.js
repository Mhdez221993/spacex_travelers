import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

it('NavBar snapshot test', () => {
  const routes = [
    {
      name: 'Rockest',
      path: '/',
    }
  ];
  const tree = renderer
    .create(
      <Router>
        <NavBar title="Mock" routes={routes} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});