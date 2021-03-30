import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BadgeContainer from './BadgeContainer';

const CardElement = ({ name, technologies, description, imgLink, url }) => {
  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {name}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <BadgeContainer technologies={technologies} />
          <Button
            variant="primary"
            className="mt-auto cardbutton"
            href={url}
            target="_blank"
          >
            See it live
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardElement;
