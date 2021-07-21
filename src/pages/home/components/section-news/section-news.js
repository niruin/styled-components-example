import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../../common/components/container';
import { LinkButton } from '../../../../common/components/link-button';
import { SectionHeader } from '../../../../common/components/section-header/section-header';

import { colors, device } from '../../../../styles/common';
import img1 from '../../../../assets/img/news/img1.jpg';
import img2 from '../../../../assets/img/news/img2.jpg';

const Root = styled.div`
  padding: 100px 0;
`;

const LinkBlock = styled.div`
  margin-top: 20px;
  display: flex;
`;

const SectionWrapperBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SectionBlockChild = styled.div`
  flex-basis: 50%;
  max-width: 550px;
  margin-bottom: 40px;
  padding-top: 20px;
  
  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

const SectionBlockImg = styled(SectionBlockChild).attrs(props => ({ img: props.img }))`
  background: url(${props => props.img});
  background-position-y: center;
  background-size: cover;
  height: 155px;
`;

const SubHeaderBlock = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const BlockParagraph = styled.p`
  font-size: 14px;
  font-family: Merriweather;
  margin-top: 20px;
  line-height: 30px;
  color: ${colors.gray};
`;

const LinkButtonStyled = styled(LinkButton)`
  margin-left: 0;
  margin-right: 40px;
`;

export function SectionNews () {
  return (
    <Root>
      <Container direction="column">
        <SectionHeader>news & blog</SectionHeader>
        <SectionWrapperBlocks>
          <SectionBlockChild>
            <SubHeaderBlock>:: Top furniture designs that changed the World for good</SubHeaderBlock>
            <BlockParagraph>
              In this article Shane Bond shares his experience about the furniture design industry, its trends, the
              history and more importantly the challenges!
            </BlockParagraph>
            <LinkBlock>
              <LinkButtonStyled>Continue Reading</LinkButtonStyled>
              <LinkButtonStyled>Share</LinkButtonStyled>
            </LinkBlock>
          </SectionBlockChild>

          <SectionBlockImg img={img1}/>
          <SectionBlockImg img={img2}/>

          <SectionBlockChild>
            <SubHeaderBlock>:: Top furniture designs that changed the World for good</SubHeaderBlock>
            <BlockParagraph>
              In this article Shane Bond shares his experience about the furniture design industry, its trends, the
              history and more importantly the challenges!
            </BlockParagraph>
            <LinkBlock>
              <LinkButtonStyled>Continue Reading</LinkButtonStyled>
              <LinkButtonStyled>Share</LinkButtonStyled>
            </LinkBlock>
          </SectionBlockChild>
        </SectionWrapperBlocks>
      </Container>
    </Root>
  );
}
