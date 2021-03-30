import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardsContainer from './CardsContainer';
import ThBadgesContainer from './ThBadgesContainer';

const Main = () => {
  return (
    <main id="myprojects">
      <Container>
        <Row>
          <Col xs={12} className="animate__animated animate__slideInUp">
            <h1 className="mt-5 mb-3 animate__animated animate__jackInTheBox">
              Who am i?{' '}
              <span role="img" aria-label="computer man">
                👨🏽‍💻
              </span>
            </h1>
            <p className="h3">
              Full Stack Javascript Developer with love of start-ups looking for
              a company where i can make an impact{' '}
            </p>
          </Col>

          <Col xs={12}>
            <h1 className="mt-5 mb-5 animate__animated animate__jackInTheBox">
              My Projects{' '}
              <span role="img" aria-label="rocket">
                ⚛️ 🚀
              </span>
            </h1>
            <CardsContainer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
