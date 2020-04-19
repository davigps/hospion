import React from 'react';
import {
  Parallax, Row, Col, Card, Icon,
} from 'react-materialize';

import './styles.css';
import hospital from '../../assets/hospital.jpg';


function Done() {
  return (
    <div>
      <Parallax
        image={<img alt="hospital" src={hospital} />}
        options={{
          responsiveThreshold: 600,
        }}
      >
        <div className="hospion-home-slogan-container">
          <p className="hospion-home-slogan">Celebre Felicidade</p>
        </div>
      </Parallax>

      <div className="about-members">

        <Row>
          <Col m={4} />
          <Col
            m={4}
            s={12}
          >
            <Card
              className="green darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              style={{ heigth: '100vh' }}
              title="Doação para o Hospital da Criança"
            >
              Doador: Anônimo
              {' '}
              <br />
              <br />
              100Kg de Aviamentos
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Done;
