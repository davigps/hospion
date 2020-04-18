import React from 'react';
import { Parallax, Icon } from 'react-materialize';
import i18n from 'i18next';

import './styles.css';
import hospital from '../../assets/hospital.jpg';

function Home() {
  return (
    <div>
      <Parallax
        image={<img alt="hospital" className="background-image" src={hospital} />}
        options={{
          responsiveThreshold: 0,
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
      <div style={{ height: '1000px' }} />
    </div>
  );
}

export default Home;
