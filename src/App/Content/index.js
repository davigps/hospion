import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Content({ children }) {
  return (
    <div className="app-content">
      { children }
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
