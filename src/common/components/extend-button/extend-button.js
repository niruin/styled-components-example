import styled from 'styled-components';
import PropTypes from 'prop-types';

import {colors} from '../../../styles/common';

export const ExtendButton = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${colors.black};
  margin-top: 20px;
  border-bottom: 1px solid #292f33;
  font-weight: 100;
  font-family: 'Merriweather', serif;
  display: inline-block;
  cursor: pointer;
  padding: 8px 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    padding: 8px 20px;
    color: ${colors.mediumGray};
    transition: all 0.4s ease-in-out;
  }
`;

ExtendButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
