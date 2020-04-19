import React from 'react';
import {
  Parallax, Row, Col, Card, Icon, CardTitle,
} from 'react-materialize';

import './styles.css';
import hospital from '../../assets/hospital.jpg';
import davi from '../../assets/members/Davi.png';
import henrique from '../../assets/members/Henrique.png';
import gustavo from '../../assets/members/Gustavo.png';
import matheus from '../../assets/members/Matheus.png';


function Home() {
  return (
    <div>
      <Parallax
        image={<img alt="hospital" src={hospital} />}
        options={{
          responsiveThreshold: 600,
        }}
      >
        <div className="hospion-home-slogan-container">
          <p className="hospion-home-slogan">Quem Somos?</p>
        </div>
      </Parallax>

      <div className="about-members">

        <Row>
          <Col
            m={3}
            s={12}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={davi}>Davi Sousa</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Desenvolvedor Frontend. Acadêmico de Ciência da Computação - UFCG.
            </Card>
          </Col>
          <Col
            m={3}
            s={12}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={matheus}>Matheus Gonzaga</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Design, Organizador e Viabilizador da Ideia. Acadêmico de Administração - UFCG.
            </Card>
          </Col>
          <Col
            m={3}
            s={12}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={henrique}>Henrique Lima</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Organizador e Viabilizador da Ideia. Acadêmico de Relações Internacionais.
            </Card>
          </Col>
          <Col
            m={3}
            s={12}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={gustavo}>Gustavo Vilar</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Desenvolvedor Backend. Acadêmico de Engenharia Elétrica - UFCG.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
