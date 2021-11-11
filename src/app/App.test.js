import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './App';

it('App snapshot test', () => {
  const initialState = {
    rocketsReducer: [],
    missionsReducer: [],
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
