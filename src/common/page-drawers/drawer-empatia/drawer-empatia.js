import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {SectionSubBanner} from '../../page-sections/section-sub-banner';
import {ExtendButton} from '../../components/extend-button';
import {Container} from '../../components/container';
import {SectionHeader} from '../../components/section-header';
import {NoteParagraph} from '../../components/note-paragraph';
import {colors, device} from '../../../styles/common';

import sprite from '../../../assets/img/sprite.png';
import bg from '../../../assets/img/contactbg.jpg';
import img6 from '../../../assets/img/artwork/img6.jpg';
import img1 from '../../../assets/img/artwork/img1.jpg';
import img8 from '../../../assets/img/artwork/img8.jpg';
import img9 from '../../../assets/img/artwork/img9.jpg';
import img10 from '../../../assets/img/artwork/img10.jpg';
import img11 from '../../../assets/img/artwork/img11.jpg';
import img12 from '../../../assets/img/artwork/img12.jpg';
import img13 from '../../../assets/img/artwork/img13.jpg';
import img14 from '../../../assets/img/artwork/img14.jpg';
import img15 from '../../../assets/img/artwork/img15.jpg';
import img16 from '../../../assets/img/artwork/img16.jpg';

const Root = styled.div`
  width: 100vw;
  margin: auto;
  background-color: white;
`;

const AppBar = styled.div`
  background-color: white;
  color: black;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.2);
  min-height: 74px;
`;

const CloseBtn = styled.div`
  margin-left: -22px;
  background: url(${sprite});
  background-repeat: no-repeat;
  background-position-y: -0;
  background-position-x: -90px;
  width: 45px;
  height: 45px;
  position: absolute;
  left: 50%;
  top: 16px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const MediumImage = styled.img`
  max-width: 100%;
`;

const NoteTitle = styled.h6`
  color: ${colors.black};
  font-size: 16px;
  margin: 0;
  line-height: 30px;
  text-transform: uppercase;
  font-family: Roboto;
`;

const WrapRubrics = styled.div`
  margin: 40px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  > * {
    flex-basis: 30%;

    @media ${device.mobileM} {
      flex-basis: 100%;
      margin: 10px 0;
    }

    &:last-child,
    &:nth-child(3n) {
      flex-basis: 20%;

      @media ${device.mobileM} {
        flex-basis: 50%;
      }
    }
  }
`;

const RubricHeader = styled.div`
  font-size: 30px;
  text-transform: none;
  font-family: Roboto;
  font-weight: bold;
  margin: 20px 0;
`;

const TextBolder = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 50px;
  font-family: Roboto;
  margin-top: 30px;
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: 60px;
  padding-top: 80px;
  margin-bottom: 0px;
`;

const ExtendButtonWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const NoteParagraphStyled = styled(NoteParagraph)`
  max-width: 550px;
  margin-bottom: 20px;
`;

DrawerEmpatia.propTypes = {
  onClose: PropTypes.func,
};

export function DrawerEmpatia({onClose}) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  function CloseButton() {
    return <CloseBtn onClick={handleClose} />;
  }

  return (
    <Root>
      <AppBar>
        <CloseButton />
      </AppBar>
      <SectionSubBanner title="EMPATIA STUDIO" bg={bg} subTitle="For 78 Years, it cannot just be odds in favor!" />
      <Container direction="column">
        <SectionHeaderStyled>Arkitube</SectionHeaderStyled>
        <NoteParagraphStyled>
          Arkitube has a goal of hand roasting the best coffee possible. They view roasting specialty coffee as an
          art.The company was founded by Gregor.
        </NoteParagraphStyled>
        <MediumImage src={img6} alt="case" />
        <WrapRubrics>
          <div>
            <NoteTitle>about client and brief</NoteTitle>
            <NoteParagraph>
              Arkitube has a goal of hand roasting the best coffee possible. They view roasting specialty coffee as an
              art. The company was founded by Gregor.
            </NoteParagraph>
          </div>
          <div>
            <NoteTitle>project itnsights</NoteTitle>
            <NoteParagraph>
              The clients goal was to widely address best coffee possible. They view roasting specialty coffee as an
              art. It was lorem but also ipsum who did that.
            </NoteParagraph>
          </div>
          <ExtendButtonWrapper>
            <ExtendButton>Get in touch</ExtendButton>
          </ExtendButtonWrapper>
          <ExtendButtonWrapper>
            <ExtendButton>Next Project</ExtendButton>
          </ExtendButtonWrapper>
        </WrapRubrics>
        <WrapRubrics>
          <div>
            <RubricHeader>Branding Strategy</RubricHeader>
            <NoteParagraph>
              The clients goal was to widely address best coffee possible. They view roasting specialty coffee as an
              art. It was lorem but also ipsum who did that.
            </NoteParagraph>
          </div>
          <MediumImage src={img1} alt="case" />
        </WrapRubrics>
        <WrapRubrics>
          <div>
            <RubricHeader>Thought Process</RubricHeader>
            <NoteParagraph>
              The clients goal was to widely address best coffee possible. They view roasting specialty.The first thing
              he wanted to do was to get up in peace without being disturbed, to get dressed.
            </NoteParagraph>
          </div>
          <MediumImage src={img8} alt="case" />
        </WrapRubrics>
        <WrapRubrics>
          <MediumImage src={img14} alt="case" />
          <MediumImage src={img15} alt="case" />
          <MediumImage src={img16} alt="case" />
        </WrapRubrics>
        <WrapRubrics>
          <div>
            <RubricHeader>Digital Asset Management</RubricHeader>
            <NoteParagraph>
              The clients goal was to widely address best coffee possible. They view roasting specialty.
            </NoteParagraph>
            <TextBolder>
              :: branding strategy <br />
              :: functional e-commerce <br />
              :: digital asset management <br />
              :: scope & approach <br />
            </TextBolder>
          </div>
          <MediumImage src={img9} alt="case" />
        </WrapRubrics>
        <WrapRubrics>
          <MediumImage src={img12} alt="case" />
          <MediumImage src={img13} alt="case" />
        </WrapRubrics>
        <WrapRubrics>
          <MediumImage src={img10} alt="case" />
          <MediumImage src={img11} alt="case" />
        </WrapRubrics>
      </Container>
    </Root>
  );
}
