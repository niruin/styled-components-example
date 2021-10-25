import React from 'react';
import styled from 'styled-components';

import {LinkButton} from '../../../../common/components/link-button';
import {Container} from '../../../../common/components/container';
import {history} from '../../../../common/routing';
import {SectionHeader} from '../../../../common/components/section-header';

import {device} from '../../../../styles/common';

const Root = styled.div`
  padding: 80px 0 50px;
`;

const ContainerStyled = styled(Container)`
  display: block;
`;

const LinkButtonStyled = styled(LinkButton)`
  text-align: left;
  margin-left: 0;
  padding-left: 0;
`;

const WrapperLinkButtons = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobileS} {
    padding: 0 10px;
  } ;
`

export function Page() {

  const redirectPage = path => {
    history.push(path);
  };
  return (
    <Root>
      <ContainerStyled>
        <SectionHeader>Pages</SectionHeader>
        <WrapperLinkButtons>
          <LinkButtonStyled onClick={() => redirectPage('/')}>Home</LinkButtonStyled>
          <LinkButtonStyled onClick={() => redirectPage('/about')}>About us</LinkButtonStyled>
          <LinkButtonStyled onClick={() => redirectPage('/services')}>Services</LinkButtonStyled>
          <LinkButtonStyled onClick={() => redirectPage('/portfolio')}>Portfolio</LinkButtonStyled>
          <LinkButtonStyled onClick={() => redirectPage('/blog')}>Blog</LinkButtonStyled>
          <LinkButtonStyled onClick={() => redirectPage('/contact')}>Contact us</LinkButtonStyled>
        </WrapperLinkButtons>
      </ContainerStyled>
    </Root>
  );
}
