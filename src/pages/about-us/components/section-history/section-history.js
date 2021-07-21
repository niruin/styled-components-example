import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../../common/components/container';

import img from '../../../../assets/img/artwork/img1.jpg';
import { colors } from '../../../../styles/common';
import { SectionHeader } from '../../../../common/components/section-header';
import { NoteParagraph } from '../../../../common/components/note-paragraph';

const ContentBlock = styled.div`
  flex-basis: 50%;
  margin: 30px 0;
  padding: 30px 30px 30px 0;
  
  &:nth-child(2) {
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const NoteParagraphStyled = styled(NoteParagraph)`
  color: ${colors.black};
`;

export function SectionHistory () {
  return (
    <div>
      <Container>
        <ContentBlock>
          <SectionHeader>Our history</SectionHeader>
          <NoteParagraphStyled>We are passionate, creative and enthusiastic designer</NoteParagraphStyled>
          <NoteParagraph>
            Here he comes Here comes Speed Racer. He's a demon once wheels. We're a gonna do it. On your mark to get
            set
            and go now. Got as dreams and we just know now we're gonna make our dream come true.
          </NoteParagraph>
        </ContentBlock>
        <ContentBlock/>
      </Container>
    </div>
  );
}
