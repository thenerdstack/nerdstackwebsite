import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import HamburgMenu from 'common/components/HamburgMenu';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import { Container } from './navbar.style';
import { openModal, closeModal } from '@redq/reuse-modal';
import Link from 'next/link';



import { MENU_ITEMS } from 'common/data/Portfolio/data';
// import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

import LogoImage from 'common/assets/image/portfolio/logo.png';
import LogoImageAlt from 'common/assets/image/portfolio/logo-alt.png';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { textAlign } from 'styled-system';


// import Link from 'utils/ActiveLink';


// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const Navbar_Hamburger = ({ navbarStyle, logoStyle, buttonStyle, containerStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container style={{...containerStyle}}>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="Nerd Stack Digital Agency"
          logoStyle={logoStyle}
          style={{backgroundColor: '#000', padding: '0 10px'}}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/contact">
               <Button 
                title="LETS TALK" 
              />
          </Link>
          <Drawer
            width="100%"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={MENU_ITEMS}
              drawerClose={true}
              offset={-100}
            />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar_Hamburger.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
  containerStyle: PropTypes.object,
};

Navbar_Hamburger.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['100px', '140px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
  containerStyle: {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    paddingTop: '20px',
  }
};

export default Navbar_Hamburger;
