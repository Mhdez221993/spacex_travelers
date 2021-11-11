import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Profile from './Profile';

describe('Missions Component', () => {
  const initialState = {
    rocketsReducer: [],
    missionsReducer: [],
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Profile snapshot test', () => {

    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
