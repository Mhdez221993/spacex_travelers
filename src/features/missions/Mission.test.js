import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Missions from './Missions';
import reducer from './missionsReducer';

describe('Missions Component', () => {
  const initialState = {
    rocketsReducer: [],
    missionsReducer: [],
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Missions snapshot test', () => {

    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('mission reducer', () => {
  const payload = {id: 123, name: 'Mock Name', description: 'Mock description'}
  const setMission = payload => ({
    type: 'missionsStore/missions/SET_MISSIONS',
    payload,
  });

  it('Shoud return initial state', () => {
    expect(reducer([], [])).toEqual([]);
  });

  it('Shoud set the first state state', () => {
    expect(reducer([], setMission(payload))).toEqual([payload]);
  });
})


