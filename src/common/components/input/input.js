import PropTypes from 'prop-types';
import styled from 'styled-components';

import {colors} from '../../../styles/common';

export const Input = styled.input`
  min-width: 270px;
  border: none;
  line-height: 30px;
  font-style: italic;
  box-shadow: none;
  border-radius: 0;
  background: ${colors.superLightGray};
  width: 100%;
  font-size: 14px;
  padding: 0 20px;
  height: 60px;
  font-weight: normal;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
};
