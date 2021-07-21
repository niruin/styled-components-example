import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {colors, device} from '../../../styles/common';

const ContentCard = styled.div`
  background-color: ${(props) => (props.dark === true ? colors.superLightGray : colors.white)};
  height: 282px;
  overflow: hidden;
  flex-basis: 33%;
  margin-top: 12px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 360px;
  position: relative;

  @media ${device.tablet} {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const PopupCard = styled.div`
  position: absolute;
  width: 100%;
  height: 282px;
  background-color: ${(props) => (props.dark === true ? colors.white : colors.superLightGray)};
  top: 100%;
  transition: top 0.4s ease-out;

  ${ContentCard}:hover & {
    top: 0;
    transition: top 0.4s ease-out;
  }
`;

export const ActionCard = ({dark, children}) => {
  return (
    <ContentCard dark={dark}>
      {children[0]}
      <PopupCard dark={dark}>{children[1]}</PopupCard>
    </ContentCard>
  );
};

ActionCard.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
