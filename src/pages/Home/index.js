import React from 'react';
import { Parallax, Container, Button } from 'react-materialize';
import i18n from 'i18next';

import './styles.css';
import hospital from '../../assets/hospital.jpg';
import donation from '../../assets/donation.png';

function Home() {
  return (
    <div>
      <Parallax
        image={<img alt="hospital" className="background-image" src={hospital} />}
        options={{
          responsiveThreshold: 600,
        }}
      >
        <div className="hospion-home-slogan-container">
          <p className="hospion-home-slogan">{i18n.t('homeSlogan')}</p>
        </div>
      </Parallax>
      <div className="container">
        <p className="hospion-home-text">
          {i18n.t('homeBio')}
        </p>
      </div>

      <Container className="donation-section">
        <img src={donation} alt="Donation" />
        <div>
          <h3>Quer fazer parte disso?</h3>
          <p>Veja a lista de pedidos em aberto.</p>
          <Button className="green darken-4">Ver Pedidos</Button>
        </div>
      </Container>

      <div className="ongs-call">
        <div className="content-ongs-call">
          <h3>É uma instituição da saúde e precisa de doação?</h3>
          <Button
            className="white green-text text-darken-4"
            waves="green"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
