import React from 'react';
import i18n from 'i18next';
import { Footer } from 'react-materialize';

import './styles.css';

const FooterDiv = () => (
  <Footer
    className="green darken-4 hospion-footer"
    copyrights={i18n.t('copyrights')}
  />
);

export default FooterDiv;
