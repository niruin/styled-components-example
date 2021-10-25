import React from 'react';
import styled from 'styled-components';

import {LinkButton} from '../../../../common/components/link-button';
import {Container} from '../../../../common/components/container';
import {SectionHeader} from '../../../../common/components/section-header';
import {NoteParagraph} from '../../../../common/components/note-paragraph';

import {colors} from '../../../../styles/common';

const Block = styled.div`
  font-family: Roboto, sans-serif;
  border-bottom: 1px solid ${colors.gray};
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const BtnWrap = styled.div`
  margin-top: 25px;
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: 30px;
  text-align: center;
`;

const NoteParagraphStyled = styled(NoteParagraph)`
  color: ${colors.black};
  font-weight: bold;
`;

export function SectionArticles() {
  return (
    <Container direction="column">
      <Block>
        <SectionHeaderStyled>Product Design Unification Study: Mobile Web Framework</SectionHeaderStyled>
        <NoteParagraphStyled>By Admin</NoteParagraphStyled>
        <NoteParagraph>
          It was a simple matter to throw off the covers; he only had to blow himself up a little and they fell off by
          themselves. But it became difficult after that, especially as he was so exceptionally broad.
        </NoteParagraph>
        <BtnWrap>
          <LinkButton text="Continue Reading" />
          <LinkButton text="Share" />
        </BtnWrap>
      </Block>
      <Block>
        <SectionHeaderStyled>Redefining lazy loading with Lazy Load XT</SectionHeaderStyled>
        <NoteParagraphStyled>By Admin</NoteParagraphStyled>
        <NoteParagraph>
          It was a simple matter to throw off the covers; he only had to blow himself up a little and they fell off by
          themselves. But it became difficult after that, especially as he was so exceptionally broad.
        </NoteParagraph>
        <BtnWrap>
          <LinkButton text="Continue Reading" />
          <LinkButton text="Share" />
        </BtnWrap>
      </Block>
      <Block>
        <SectionHeaderStyled>An Exploration of Carousel usage on Mobile Websites</SectionHeaderStyled>
        <NoteParagraphStyled>By Admin</NoteParagraphStyled>
        <NoteParagraph>
          It was a simple matter to throw off the covers; he only had to blow himself up a little and they fell off by
          themselves. But it became difficult after that, especially as he was so exceptionally broad.
        </NoteParagraph>
        <BtnWrap>
          <LinkButton text="Continue Reading" />
          <LinkButton text="Share" />
        </BtnWrap>
      </Block>
    </Container>
  );
}
