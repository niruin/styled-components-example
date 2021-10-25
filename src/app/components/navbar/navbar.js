import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {NavbarItem} from './navbar-item';

import {Container} from '../../../common/components/container';
import {history} from '../../../common/routing';
import {device} from '../../../styles/common';

import logo from '../../../assets/img/logo.png';
import hamburger from '../../../assets/img/hamburger.png';
import cross from '../../../assets/svg/cross.svg';

const AppBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
  color: black;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  background: url(${logo}) no-repeat center;
  height: 33px;
  min-width: 86px;
  margin: 22px 0 15px;

  @media ${device.tablet} {
    margin: 16px 0 15px calc(50% - 52px);
    transform: translate(-43px);
  }
`;

const Hamburger = styled.img`
  display: none;
  width: 34px;
  height: 34px;
  margin: 16px 10px 0;
  background-repeat: no-repeat;
  cursor: pointer;

  @media ${device.tablet} {
    display: block;
  }
`;

const MenuPanel = styled.div`
  display: flex;
  flex-direction: row;
`

const WrapperNavbarItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;

  @media ${device.tablet} {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
  }
`;

const DropOutBlockStyle = styled.div`
  padding: 8px 12px;
  width: 140px;
  font-size: 14px;
  font-family: Merriweather, serif;

  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  transition: color, background-color 0.5s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: rgba(255, 255, 255, 1);
    transition: color, background-color 0.5s linear;
  }
`;

export function Navbar() {
  const [isShowMenu, toggleIsShowMenu] = useState(false);

  const toggleShowMenu = () => {
    toggleIsShowMenu(!isShowMenu);
  };

  const handleCloseMenu = () => {
    toggleIsShowMenu(false);
  };

  DropOutBlock.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
  };

  function DropOutBlock({path, children}) {
    const redirect = () => {
      history.push(path);
    }

    return <DropOutBlockStyle onClick={redirect} onTouchEnd={handleCloseMenu}>{children}</DropOutBlockStyle>;
  }

  return (
    <AppBar>
      <Container justify="space-between">
        <MenuPanel>
          <Hamburger onClick={toggleShowMenu} src={isShowMenu ? cross : hamburger} />
          <Logo />
        </MenuPanel>
        <WrapperNavbarItems open={isShowMenu}>
          <NavbarItem path="/" title="home">
            <DropOutBlock path="/"> Home</DropOutBlock>
            <DropOutBlock path="/">Index1</DropOutBlock>
            <DropOutBlock path="/">Index2</DropOutBlock>
            <DropOutBlock path="/">Index3</DropOutBlock>
          </NavbarItem>
          <NavbarItem path="/pages" title="pages">
            <DropOutBlock path="/">Home</DropOutBlock>
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
          <NavbarItem onClick={handleCloseMenu} path="/contact" title="contact us" />
        </WrapperNavbarItems>
      </Container>
    </AppBar>
  );
}
