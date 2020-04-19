import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextInput, Button } from 'react-materialize';

import './styles.css';

import api from '../../services/api';
import { login } from '../../services/auth';

function LoginPj() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleLogin = async () => {
    localStorage.clear();

    const response = await api({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password,
      },
    });

    const { token, name } = response.data;
    const user = {
      email,
      namePj: name,
      type: 'hp',
    };

    login(token, user);

    history.push('/');
  };

  return (
    <Container className="signup-pj-form">
      <h3 style={{ color: '#006633', fontWeight: 'bolder' }}>Inicie uma nova sessão.</h3>
      <TextInput
        id="ip3"
        icon="email"
        className="signup-input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Registrado"
        type="email"
      />
      <TextInput
        id="ip4"
        icon="lock"
        className="signup-input"
        onChange={(e) => setPasword(e.target.value)}
        placeholder="Senha"
        type="password"
      />
      <div className="row pj-buttons">
        <Button className="green darken-3" onClick={handleLogin}>Fazer LogIn</Button>
      </div>
    </Container>
  );
}

export default LoginPj;
