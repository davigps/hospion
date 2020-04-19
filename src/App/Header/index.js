import React, { useState } from 'react';
import {
  Navbar, NavItem, Icon, Button, Modal,
} from 'react-materialize';
import { useHistory, useLocation, Link } from 'react-router-dom';
import i18n from 'i18next';

import './styles.css';
import logo from '../../assets/headerLogo.png';

function Header() {
  const history = useHistory();
  const { pathname } = useLocation();

  const [modal, setModal] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    history.push(pathname);
  };

  return (
    <Navbar
      alignLinks="right"
      brand={(
        <Link className="brand-logo hospion-header" to="/">
          <img src={logo} alt="HospiOn" className="responsive-img hospion-header" />
        </Link>
      )}
      id="mobile-nav"
      className="white darken-4 hospion-header-background"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/orders">{i18n.t('seeOrders')}</NavItem>
      <NavItem href="/done">{i18n.t('oldOrders')}</NavItem>
      <NavItem href="/about">{i18n.t('aboutUs')}</NavItem>
      <NavItem>
        <Button
          className="green darken-3"
          onClick={() => history.push('/login')}
        >
          {i18n.t('beDonator')}
        </Button>
      </NavItem>
      <NavItem />
      <NavItem style={{ marginLeft: '1rem' }} onClick={() => setModal(true)}>
        <Icon tiny className="left">language</Icon>
        {i18n.t('changeLang')}
      </NavItem>

      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green" onClick={() => setModal(false)}>Close/Fechar/Cerrar</Button>,
        ]}
        bottomSheet
        fixedFooter
        header="Change the language | Mudar o idioma | Cambiar el idioma"
        open={modal}
        className="modal-lang"
      >
        <div className="row idioms-buttons">
          <div style={{ marginLeft: '5rem' }}>
            <Button className="green darken-4" onClick={() => changeLang('en')}>English</Button>
          </div>
          <div style={{ marginLeft: '5rem' }}>
            <Button className="green darken-4" onClick={() => changeLang('pt')}>Português</Button>
          </div>
          <div style={{ marginLeft: '5rem' }}>
            <Button className="green darken-4" onClick={() => changeLang('es')}>Español</Button>
          </div>
        </div>
      </Modal>
    </Navbar>
  );
}

export default Header;
