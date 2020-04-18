import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import 'materialize-css';

import i18nConfig from '../config/i18n';

import Header from './Header';

const App = ({ children }) => (
  <I18nextProvider i18n={i18nConfig}>
    <Header />
    { children }
  </I18nextProvider>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
