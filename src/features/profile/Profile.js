import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions } from '../missions/missionsReducer';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ missionsReducer }) => [missionsReducer]);
  useEffect(() => {
    if (!store.length) {
      dispatch(loadMissions);
    }
  }, []);

  const [missions] = store;
  const rockets = missions;
  return (
    <div className="profile-holder">
      <div className="profile-item">
        <h2 className="profile-title">My Missios</h2>
        <div className="ul-profile">
          {missions.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.name}</div> : null
          ))}
        </div>
      </div>

      <div className="profile-item">
        <h2 className="profile-title">My Rockets</h2>
        <div className="ul-profile">
          {rockets.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.name}</div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
