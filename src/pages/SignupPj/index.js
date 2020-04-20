import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, TextInput, Button, Modal, Icon,
} from 'react-materialize';

import './styles.css';

import api from '../../services/api';

function SignupPj() {
  const history = useHistory();

  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const [cnpj, setCnpj] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const handleSignup = async () => {
    if (!(cnpj || name || email || password)) {
      setError('Você precisa preencher todos os campos.');
      setModal(true);
    } else if (password !== confirmpass) {
      setError('As senhas não correspondem.');
      setModal(true);
    } else {
      await api({
        method: 'POST',
        url: '/auth?by=cnpj',
        data: {
          cnpj,
          name,
          email,
          password,
        },
      });

      history.push('/login-pj');
    }
  };

  return (
    <Container className="signup-pj-form">
      <h3 style={{ color: '#006633', fontWeight: 'bolder' }}>Detalhe suas informações.</h3>
      <TextInput
        id="ip1"
        icon="dvr"
        className="signup-input"
        onChange={(e) => setCnpj(e.target.value)}
        label="CNPJ"
      />
      <TextInput
        id="ip2"
        icon="business"
        className="signup-input"
        onChange={(e) => setName(e.target.value)}
        label="Nome da Empresa"
      />
      <TextInput
        id="ip3"
        icon="email"
        className="signup-input"
        onChange={(e) => setEmail(e.target.value)}
        label="Email para contato com a empresa"
        type="email"
      />
      <TextInput
        id="ip4"
        icon="lock"
        className="signup-input"
        onChange={(e) => setPasword(e.target.value)}
        label="Senha"
        type="password"
      />
      <TextInput
        id="ip4"
        icon="lock"
        className="signup-input"
        onChange={(e) => setConfirmpass(e.target.value)}
        label="Confirmar Senha"
        type="password"
      />
      <Button className="green darken-3" onClick={handleSignup}>Confirmar e Submeter</Button>

      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Ok</Button>,
        ]}
        fixedFooter
        header="Atenção!"
        open={modal}
      >
        <div className="error-container">
          <Icon large>error</Icon>
          {error}
        </div>
      </Modal>
    </Container>
  );
}

export default SignupPj;
