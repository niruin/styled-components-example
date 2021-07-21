import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavbarItem } from './navbar-item';
import { Container } from '../../../common/components/container';

import { device } from '../../../styles/common';

import logo from '../../../assets/img/logo.png';
import hamburger from '../../../assets/img/hamburger.png';

const AppBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
  color: black;
  box-shadow: 0px 1px 4px -1px rgba(0,0,0,0.2);
  
  @media ${device.tablet} {
    position: static;
  }
`;

const Logo = styled.div`
  background: url(${logo});
  height: 33px;
  min-width: 86px;
  margin: 22px 0 15px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Hamburger = styled.img`
  display: none;
  width: 34px;
  height: 34px;
  margin: 15px auto 12px;
  background-repeat: no-repeat;
  cursor: pointer;
  
  @media ${device.tablet} {
    display: block;
  }
`;

const WrapperNavbarItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  
  @media ${device.tablet} {
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
  }
`;

const DropOutBlockStyle = styled.div`
  padding: 8px 12px;
  width: 140px;
  font-size: 14px;
  font-family: Merriweather, serif;

  background-color: rgba(255,255,255,1);
  color: rgba(0,0,0,1);
  transition: color, background-color 0.5s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,0.7);
    color: rgba(255,255,255,1);
    transition: color, background-color 0.5s linear;
  }
`;

export function Navbar () {
  const [widthScreen, setWidthScreen] = useState(window.document.body.offsetWidth);
  const [isShowMenu, toggleIsShowMenu] = useState(false);
  const widthScroll = 17;

  useEffect(() => {
    window.addEventListener('resize', () => setWidthScreen(window.document.body.offsetWidth + widthScroll)); // TODO do remake
  }, []);

  const toggleShowMenu = () => {
    toggleIsShowMenu(!isShowMenu);
  };

  const handleCloseMenu = () => {
    toggleIsShowMenu(false);
  };

  DropOutBlock.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
  };

  function DropOutBlock ({ children }) {
    return <DropOutBlockStyle onTouchEnd={handleCloseMenu}>{children}</DropOutBlockStyle>;
  }

  return (
    <AppBar>
      <Container justify="space-between">
        <Logo/>
        <Hamburger widthScreen={widthScreen} onClick={toggleShowMenu} src={hamburger}/>
        <WrapperNavbarItems widthScreen={widthScreen} open={isShowMenu}>
          <NavbarItem path="/" title="home">
            <DropOutBlock path="/"> Home</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
            <DropOutBlock path="/">Index3</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/pages" title="pages">
            <DropOutBlock path="/home">Home</DropOutBlock>
            <DropOutBlock path="/about">About us</DropOutBlock>
            <DropOutBlock path="/services">Services</DropOutBlock>
            <DropOutBlock path="/portfolio">Portfolio</DropOutBlock>
            <DropOutBlock path="/blog">Blog</DropOutBlock>
            <DropOutBlock path="/contact">Contact us</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/about" title="about us">
            <DropOutBlock path="/about">About</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/services" title="services">
            <DropOutBlock path="/services">Services</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/portfolio" title="portfolio">
            <DropOutBlock path="/portfolio">Portfolio</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/blog" title="blog">
            <DropOutBlock path="/blog">Blog</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/contact" title="contact us"/>
        </WrapperNavbarItems>
      </Container>
    </AppBar>
  );
}
