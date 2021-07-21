import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export function IconButton ({ onClick, children }) {
  return (
    <Wrapper onClick={ onClick }>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
`;
