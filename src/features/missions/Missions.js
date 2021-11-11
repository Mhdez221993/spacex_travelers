import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import {
  Badge,
  Button,
  Container,
  Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { exitMission, joinMission, loadMissions } from './missionsReducer';
import './misssion.css';

const Missions = () => {
  const missions = useSelector(({ missionsReducer }) => missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(loadMissions());
    }
  }, []);
  return (
    <div>
      <Container className="bg-container p-0">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{'  '}</th>
            </tr>
          </thead>
          <tbody>
            {missions.map(({
              id,
              name,
              description,
              reserved,
            }) => (
              <tr key={id}>
                <td><p className="fw-bold">{name}</p></td>
                <td><p>{description}</p></td>
                <td className="align-middle">
                  {reserved && <Badge bg="info">ACTIVE MEMBER</Badge>}
                  {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
                </td>
                <td className="col-2 align-middle text-center">
                  {reserved
                  && (
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => dispatch(exitMission(id))}
                  >
                    Leave Mission
                  </Button>
                  )}
                  {!reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() => dispatch(joinMission(id))}
                  >
                    Join Mission
                  </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Missions;
