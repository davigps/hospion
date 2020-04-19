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
    { header: '', icon: '', content: '' },
    { header: '', icon: '', content: '' },
    { header: '', icon: '', content: '' },
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
        <CollapsibleItem
          expanded={false}
          header="Better safe than sorry. That's my motto."
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          Better safe than sorry. That's my motto.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Yeah, you do seem to have a little 'shit creek' action going."
          icon={<Icon>place</Icon>}
          node="div"
        >
          Yeah, you do seem to have a little 'shit creek' action going.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
          icon={<Icon>whatshot</Icon>}
          node="div"
        >
          You know, FYI, you can buy a paddle. Did you not plan for this contingency?
        </CollapsibleItem>
      </Collapsible>

      <Button onClick={() => {
        logout();
        localStorage.clear();
        history.push('/');
      }}
      >
        Sair

      </Button>
    </Container>
  );
}

export default Profile;
