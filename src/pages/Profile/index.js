import React, { useState } from 'react';
import {
  Container, Divider, Collapsible, CollapsibleItem,
  Icon, Button, TextInput,
} from 'react-materialize';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { logout, getUser, getToken } from '../../services/auth';

import avatar from '../../assets/avatar.png';
import './styles.css';

function Profile() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const user = getUser();

  const userInfos = [
    { header: 'Seu nome.', icon: 'person', content: user.name },
    { header: 'O Nome.', icon: 'business', content: user.namePj },
    { header: 'Seu e-mail para contato.', icon: 'email', content: user.email },
  ];

  const history = useHistory();

  const handleOrder = async () => {
    const response = await api({
      method: 'POST',
      url: '/addOrder/',
      headers: {
        authorization: getToken(),
      },
      data: {
        titulo: title,
        descricao: desc,
      },
    });

    console.log(response);
  };

  return (
    <Container className="center profile-container">
      <div className="profile-section" style={{ padding: '2vw' }}>

        <div className="profile-avatar">
          {
            user.type === 'pf'
              ? (<img className="circle responsive-img" src={getUser().picture} alt="Profile Avatar" />)
              : (<img className="circle responsive-img" src={avatar} alt="Profile Avatar" />)
          }
          <h3>Informações Pessoais</h3>
        </div>
        <Divider />

        <Collapsible
          accordion
          popout
          className="profile-infos"
        >
          {
            userInfos.map((info) => (
              info.content
                ? (
                  <CollapsibleItem
                    expanded={false}
                    header={info.header}
                    icon={<Icon>{info.icon}</Icon>}
                    node="div"
                    key={info.icon}
                  >
                    {info.content}
                  </CollapsibleItem>
                )
                : ''
            ))
          }
        </Collapsible>
      </div>

      {
        user.type === 'hp'
          ? (
            <>

              <Container className="signup-pj-form profile-section">
                <div className="orders-form-title">
                  <h1 style={{ fontSize: '340%' }}>Para Organizações</h1>
                </div>
                <h3 style={{ color: '#006633', fontWeight: 'bolder' }}>Faça um novo pedido por aqui.</h3>
                <TextInput
                  id="ip3"
                  icon="title"
                  className="signup-input"
                  onChange={(e) => setTitle(e.target.value)}
                  label="Título do seu pedido"
                />
                <TextInput
                  id="ip4"
                  icon="description"
                  className="signup-input green-text"
                  onChange={(e) => setDesc(e.target.value)}
                  label="Descrição da problemática (tamanho, gravidade, necessidade, etc...)"
                />
                <div className="row pj-buttons">
                  <Button className="green darken-3" onClick={handleOrder}>Adicionar novo pedido</Button>
                </div>
              </Container>
            </>
          )
          : ''
      }

      <Button
        onClick={() => {
          logout();
          localStorage.clear();
          history.push('/');
        }}
        className="red profile-logout"
      >
        Encerrar Sessão

      </Button>
    </Container>
  );
}

export default Profile;
