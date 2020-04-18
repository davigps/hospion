import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <>
    {children}
  </>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
