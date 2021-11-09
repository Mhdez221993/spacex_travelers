/* eslint-disable camelcase */
import getMissions from './api';

const SET_MISSIONS = 'missionsStore/missions/SET_MISSIONS';
const JOIN_MISSION = 'missionsStore/missions/JOIN_MISSION';
const EXIT_MISSION = 'missionsStore/missions/EXIT_MISSION';
const initialState = [];

const setMission = payload => ({
  type: SET_MISSIONS,
  payload,
});

export const exitMission = payload => ({
  type: EXIT_MISSION,
  payload,
});

export const joinMission = payload => ({
  type: JOIN_MISSION,
  payload,
});

export const loadMissions = () => async dispatch => {
  const missions = await getMissions();
  if (missions) {
    missions.forEach(({ mission_id, mission_name, description }) => {
      dispatch(setMission({
        id: mission_id,
        name: mission_name,
        description,
        reserved: false,
      }));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return [...state, action.payload];

    case JOIN_MISSION:
      return state.map(mission => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });

    case EXIT_MISSION:
      return state.map(mission => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: false,
        };
      });

    default:
      return state;
  }
};

export default reducer;
