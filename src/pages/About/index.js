import React from 'react';
import {
  Parallax, Row, Col, Card, Icon, CardTitle, Carousel,
} from 'react-materialize';

import './styles.css';
import hospital from '../../assets/hospital.jpg';
import davi from '../../assets/members/Davi.png';
import henrique from '../../assets/members/Henrique.png';
import gustavo from '../../assets/members/Gustavo.png';
import matheus from '../../assets/members/Matheus.png';


function About() {
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
              Organizador e Viabilizador da Ideia. Acadêmico de Relações Internacionais -
              Universidade Jaguelônica | PO.
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

      <div className="carousel-title">
        <h1>Sobre a HospiOn</h1>
      </div>

      <Carousel
        carouselId="Carousel-2"
        className="white-text center"
        options={{
          fullWidth: true,
          indicators: true,
        }}
      >
        <div className="carousel-1">
          <div className="carousel">
            <Icon large>gps_fixed</Icon>
            <h2>
              Missão
            </h2>
            <p>
              Descentralizar as doações, levando informações que
              possam auxiliar o doador a decidir para quem, o que e como doar.
            </p>
          </div>
        </div>
        <div className="carousel-2">
          <div className="carousel">
            <Icon large>remove_red_eye</Icon>
            <h2>
              Visão
            </h2>
            <p>
              Tornar-se a maior plataforma solidária do país, promovendo segurança e
              integridade aos doadores e beneficiados, levando transparência nas
              transações feitas utilizando nossa plataforma.
            </p>
          </div>
        </div>
        <div className="carousel-3">
          <div className="carousel">
            <Icon large>star</Icon>
            <h2>
              Valor
            </h2>
            <p>
              Respeito às necessidades humanas, levando a solidariedade a todas as regiões
              do país, promover a colaboração entre entidades públicas e privadas, sociais
              e empresariais. Por fim, zelar pela integridade física, moral e social de
              todos os envolvidos.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
