import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { useHistory, Link } from 'react-router-dom';
import i18n from 'i18next';


function Header() {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    history.push('/');
  };

  return (
    <Navbar
      alignLinks="right"
      brand={(
        <Link className="brand-logo" href="/">
          Logo
        </Link>
      )}
      id="mobile-nav"
      className="grey darken-1"
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
      <NavItem>{i18n.t('aboutUs')}</NavItem>
      <NavItem divider />
      <NavItem style={{ marginLeft: '1rem' }}>
        <Icon tiny className="left">language</Icon>
        {i18n.t('changeLang')}
      </NavItem>
    </Navbar>
  );
}

export default Header;
