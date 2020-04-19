import React from 'react';
import {
  Container, Divider, Collapsible, CollapsibleItem, Icon, Button,
} from 'react-materialize';

import { useHistory } from 'react-router-dom';

import { logout, getUser } from '../../services/auth';

import avatar from '../../assets/avatar.png';
import './styles.css';

function Profile() {
  const user = getUser();

  const userInfos = [
    { header: 'Seu nome.', icon: 'person', content: user.name },
    { header: 'O Nome.', icon: 'business', content: user.namePj },
    { header: 'Seu e-mail para contato.', icon: 'email', content: user.email },
  ];

  const history = useHistory();

  return (
    <Container className="center profile-container">
      <div className="profile-avatar">
        {
          user.type === 'pf'
            ? (<img className="circle" src={getUser().picture} alt="Profile Avatar" />)
            : (<img className="circle" src={avatar} alt="Profile Avatar" />)
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
