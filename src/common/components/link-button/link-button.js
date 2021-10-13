import styled from 'styled-components';

import {colors, device} from '../../../styles/common';

export const LinkButton = styled.div`
  margin: 0 20px;
  font-size: 14px;
  padding-bottom: 4px;
  font-family: Merriweather;
  font-style: italic;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: border-color 0.5s linear;

  &:hover {
    color: ${colors.blue};
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    transition: border-color 0.5s linear;
    cursor: pointer;
  }
  
  &:active {
    font-weight: bold;
  }

  @media ${device.tablet} {
    margin: 10px 20px;
  }
`;
