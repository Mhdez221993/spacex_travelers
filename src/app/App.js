import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from '../features/missions/Missions';
import NavBar from '../features/navBar/NavBar';
import Profile from '../features/profile/Profile';
import Rockest from '../features/rockets/Rockets';
import './app.css';

const routes = [
  {
    name: 'Rockest',
    path: '/',
    component: <Rockest />,
  },
  {
    name: 'Missions',
    path: '/missions',
    component: <Missions />,
  },
  {
    name: 'My Profile',
    path: '/profile',
    component: <Profile />,
  },
];

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <NavBar title="Space Travelers' Hub" routes={routes} />
        <Routes>
          { routes.map(
            ({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ),
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
