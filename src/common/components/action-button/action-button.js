import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import search from '../../../assets/svg/search.svg';
import link from '../../../assets/svg/link.svg';

ActionButton.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

const Fab = styled.svg`
  background-image: url(${props => props.type === 'link' ? link : search});
  transform: rotate(${props => props.type === 'link' ? 90 : 0}deg);
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255,255,255,1);
  }
`;

export function ActionButton ({ type, open, children, onClick }) {
  return (
    <>
      <Fab onClick={onClick} aria-label="edit" type={type}/>
      {open && children}
    </>
  );
}
