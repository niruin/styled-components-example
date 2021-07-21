import React from 'react';
import styled from 'styled-components';

export const ActionCardContent = ({icon, children}) => {
  return <StyledActionCardContent icon={icon}>{children}</StyledActionCardContent>;
};

const StyledActionCardContent = styled.div`
 margin-top: 165px;
   
  &:before {
    background-image: url(${props => props.icon});
  }
`;
