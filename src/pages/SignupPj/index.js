import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextInput, Button } from 'react-materialize';

import './styles.css';

import api from '../../services/api';
import { login } from '../../services/auth';

function SignupPj() {
  const history = useHistory();

  const [cnpj, setCnpj] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleSignup = async () => {
    const response = await api({
      method: 'POST',
      url: '/auth?by=cnpj',
      data: {
        cnpj,
        name,
        email,
        password,
      },
    });

    const { token } = response.data;
    const user = {
      cnpj, name, email, password,
    };

    localStorage.clear();
    login(token, user);

    history.push('/');
  };

  return (
    <Container className="signup-pj-form">
      <h3 style={{ color: '#006633', fontWeight: 'bolder' }}>Detalhe suas informações.</h3>
      <TextInput
        id="ip1"
        icon="dvr"
        className="signup-input"
        onChange={(e) => setCnpj(e.target.value)}
        placeholder="CNPJ"
      />
      <TextInput
        id="ip2"
        icon="business"
        className="signup-input"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome da Empresa"
      />
      <TextInput
        id="ip3"
        icon="email"
        className="signup-input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email para contato com a empresa"
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
      <Button className="green darken-3" onClick={handleSignup}>Confirmar e Submeter</Button>
    </Container>
  );
}

export default SignupPj;
