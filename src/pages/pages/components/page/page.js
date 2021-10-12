import React from 'react';
import styled from 'styled-components';

import {LinkButton} from '../../../../common/components/link-button';
import {Container} from '../../../../common/components/container';
import {history} from '../../../../common/routing';

const Root = styled.div`
  padding: 80px 0 50px;
`;

export function Page() {

  const redirectPage = path => {
    history.push(path);
  };
  return (
    <Root>
      <Container>
        <LinkButton onClick={() => redirectPage('/')}>Home</LinkButton>
        <LinkButton onClick={() => redirectPage('/about')}>About us</LinkButton>
        <LinkButton onClick={() => redirectPage('/services')}>Services</LinkButton>
        <LinkButton onClick={() => redirectPage('/portfolio')}>Portfolio</LinkButton>
        <LinkButton onClick={() => redirectPage('/blog')}>Blog</LinkButton>
        <LinkButton onClick={() => redirectPage('/contact')}>Contact us</LinkButton>
      </Container>
    </Root>
  );
}
