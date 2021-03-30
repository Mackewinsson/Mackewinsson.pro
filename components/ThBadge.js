import React from 'react';
import { Card } from 'react-bootstrap';

const ThBadge = ({ name, icon_url }) => {
  return (
    <div className="col mb-4">
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img
          variant="top"
          src={icon_url}
          style={{ width: 63, margin: '0 auto' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <i
              className="fas fa-check-circle"
              style={{ color: 'green', fontSize: '1.5rem' }}
            ></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThBadge;
