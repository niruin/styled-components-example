import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {device} from '../../../styles/common';

const Root = styled.div`
  padding-top: 88px;

  @media ${device.tablet} {
    padding-top: 0;
  }
`;

LayoutContent.propTypes = {
  className: PropTypes.string,
};

export function LayoutContent({...rest}) {
  return <Root {...rest} />;
}
