import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Rockets from './Rockets';
import reducer from './rocketsReducer';

describe('Missions Component', () => {
  const initialState = {
    rocketsReducer: [],
    missionsReducer: [],
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Rockets snapshot test', () => {

    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('mission reducer', () => {

  it('Shoud return initial state', () => {
    expect(reducer([], [])).toEqual([]);
  });
})
