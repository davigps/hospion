import React from 'react';
import { useHistory } from 'react-router-dom';

import { logout } from '../../services/auth';

import './styles.css';

function Profile() {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        logout();
        history.push('/');
      }}
      type="button"
    >
      Sair
    </button>
  );
}

export default Profile;
