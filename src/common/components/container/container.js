import styled from 'styled-components';
import PropTypes from 'prop-types';

import {device} from '../../../styles/common';

export const Container = styled.div`
  display: flex;
  width: 100%;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  justify-content: ${(props) => props.content};
  flex-direction: ${(props) => props.direction};

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobileS} {
    padding-left: 10px;
    padding-right: 10px;
  } ;
`;

Container.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  direction: PropTypes.string,
};
