import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from '../features/missions/missionsReducer';
import rocketsReducer from '../features/rockets/rocketsReducer';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
