import React from 'react';
import { Parallax } from 'react-materialize';
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
      />
      <div style={{ height: '1000px' }} />
    </div>
  );
}

export default Home;
