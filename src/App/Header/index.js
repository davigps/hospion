import React from 'react';
import {
  Navbar, NavItem, Icon, Button,
} from 'react-materialize';
import { useHistory, useLocation, Link } from 'react-router-dom';
import i18n from 'i18next';

import './styles.css';
import logo from '../../assets/headerLogo.png';

function Header() {
  const history = useHistory();
  const { pathname } = useLocation();

  // eslint-disable-next-line no-unused-vars
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
      <NavItem>{i18n.t('seeMap')}</NavItem>
      <NavItem>{i18n.t('seeOrders')}</NavItem>
      <NavItem>{i18n.t('oldOrders')}</NavItem>
      <NavItem>{i18n.t('aboutUs')}</NavItem>
      <NavItem>
        <Button
          className="green darken-3"
          onClick={() => history.push('/signup')}
        >
          {i18n.t('beDonator')}
        </Button>
      </NavItem>
      <NavItem divider />
      <NavItem style={{ marginLeft: '1rem' }}>
        <Icon tiny className="left">language</Icon>
        {i18n.t('changeLang')}
      </NavItem>
    </Navbar>
  );
}

export default Header;
