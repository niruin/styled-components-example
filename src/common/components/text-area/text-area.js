import styled from 'styled-components';
import PropTypes from 'prop-types';

import {colors} from '../../../styles/common';

export const TextArea = styled.textarea`
  border: none;
  line-height: 140%;
  resize: none;
  font-style: italic;
  box-shadow: none;
  border-radius: 0;
  background: ${colors.superLightGray};
  display: inline-block;
  width: 100%;
  font-size: 14px;
  padding: 14px 20px;
  height: 60px;
  font-weight: normal;
  margin-bottom: 20px;
  min-height: 135px;
  box-sizing: border-box;
`;

TextArea.propTypes = {
  placeholder: PropTypes.string,
};
