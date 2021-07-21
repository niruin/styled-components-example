import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {device} from '../../../styles/common';
import {history} from '../../../common/routing';

const Title = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-family: Roboto;
  margin-top: 16px;
  margin-bottom: 15px;
  padding-top: 22px;
  padding-bottom: 16px;
  transition: border-color 0.5s linear;
  border-bottom: ${(props) =>
    props.expanded || props.path === props.page ? '2px solid rgba(0,0,0,1)' : '2px solid rgba(0,0,0,0)'};
  cursor: pointer;

  &:hover {
    color: #23527c;
  }

  @media ${device.tablet} {
    margin: 0;
    font-size: 16px;
  } ;
`;

export const NavbarItemTitle = ({path, expanded, title}) => {
  const location = useLocation();

  const redirectPage = () => {
    history.push(path);
  };

  return (
    <Title onClick={redirectPage} expanded={expanded} path={path} page={location.pathname}>
      {title}
    </Title>
  );
};

NavbarItemTitle.propTypes = {
  path: PropTypes.string,
  expanded: PropTypes.bool,
  title: PropTypes.string,
};
