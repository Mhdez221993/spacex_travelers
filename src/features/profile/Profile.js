import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions } from '../missions/missionsReducer';
import { loadRockets } from '../rockets/rocketsReducer';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ missionsReducer, rocketsReducer }) => (
    [missionsReducer, rocketsReducer]));
  useEffect(() => {
    if (!store[0].length && !store[1].length) {
      dispatch(loadMissions());
      dispatch(loadRockets());
    }
  }, []);

  const [missions, rockets] = store;
  return (
    <div className="profile-holder">
      <div className="profile-item">
        <h2 className="profile-title">My Mission</h2>
        <div className="ul-profile">
          {missions.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.name}</div> : null
          ))}
        </div>
      </div>
      <div className="spacer" />
      <div className="profile-item">
        <h2 className="profile-title">My Rockets</h2>
        <div className="ul-profile">
          {rockets.map(rocket => (
            rocket.reserved ? <div key={rocket.id} className="li-profile">{rocket.rocket_name}</div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
