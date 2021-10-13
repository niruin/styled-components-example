import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {NavbarItemTitle} from './navbar-item-title';

import {device} from '../../../styles/common';

const ExpansionDetails = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  position: absolute;
  z-index: 1;

  @media ${device.tablet} {
    position: static;
  } ;
`;

const ExpansionPanel = styled.div`
  position: relative;
  padding: 0 15px;
`;

export function NavbarItem({path, title, children, onClick}) {
  const [expanded, setExpanded] = useState(false);

  const handleMouseOver = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleMouseClick = () => {
    setExpanded(!expanded);
    if(onClick) {
      onClick();
    }
  };

  return (
    <ExpansionPanel onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave} onTouchEnd={handleMouseClick}>
      <NavbarItemTitle path={path} expanded={expanded} title={title} />
      <ExpansionDetails expanded={expanded}>{children}</ExpansionDetails>
    </ExpansionPanel>
  );
}

NavbarItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
