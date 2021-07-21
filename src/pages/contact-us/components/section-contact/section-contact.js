import React from 'react';
import styled from 'styled-components';

import { Input } from '../../../../common/components/input';
import { TextArea } from '../../../../common/components/text-area';
import { LinkButton } from '../../../../common/components/link-button';
import { SectionHeader } from '../../../../common/components/section-header/section-header';
import { Container } from '../../../../common/components/container';
import { NoteParagraph } from '../../../../common/components/note-paragraph/note-paragraph';

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: 65px; 
  text-transform: none;
`;

const SubSectionHeader = styled(SectionHeader)`
  font-size: 30px;
  text-transform: none;
`;

const SubSecondTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  font-family: Roboto;
  margin-top: 30px;
`;

const InfoBlockWrap = styled.div`
  display: flex;
  line-height: 160%;
`;

const InfoBlock = styled.div`
  padding-right: 40px;
  font-size: 14px;
  font-family: Roboto;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const TextAreaWrap = styled.div`
  width: 100%;
`;

const IframeWrapper = styled.div`
  margin: 40px 0;
`;

const ContainerStyled = styled(Container)`
  
  flex-wrap: wrap;
  > * {
    flex-basis: 50%;
    
    &:nth-child(3) {
      flex-basis: 100%;
    }
  }
`;

const NoteParagraphWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  margin-bottom: 30px;
`;

const LinkButtonStyled = styled(LinkButton)`
  display: inline-block;
  margin-right: 0;
`;

const LinkButtonWrapper = styled.div`
  text-align: right;
  padding-right: 10px;
`;

export function SectionContact () {
  return (
    <>
      <Container direction="column">
        <SectionHeaderStyled>Kora Inc.</SectionHeaderStyled>
        <NoteParagraphWrapper>
          <NoteParagraph>
            Arkitube has a goal of hand roasting the best coffee. They view specialty coffee as an art.The
            company was founded by Makriv Ramev.
          </NoteParagraph>
        </NoteParagraphWrapper>
      </Container>
      <ContainerStyled>
        <div>
          <SubSectionHeader>Registered Addresses</SubSectionHeader>

          <SubSecondTitle>dublin</SubSecondTitle>
          <InfoBlockWrap>
            <InfoBlock>
              <div>35 Elm St</div>
              <div>Rugaong, 12569</div>
              <div>Dublin</div>
            </InfoBlock>
            <InfoBlock>
              <div>P: 123 5698 745- 56</div>
              <div>E: hello@kora.ie</div>
              <div>sales@kora.ie</div>
            </InfoBlock>
          </InfoBlockWrap>

          <SubSecondTitle>new delhi</SubSecondTitle>
          <InfoBlockWrap>
            <InfoBlock>
              <div>35 Elm St</div>
              <div>Rugaong, 12569</div>
              <div>Dublin</div>
            </InfoBlock>
            <InfoBlock>
              <div>P: 123 5698 745- 56</div>
              <div>E: hello@kora.ie</div>
              <div>sales@kora.ie</div>
            </InfoBlock>
          </InfoBlockWrap>
        </div>

        <div>
          <SubSectionHeader>Write to us!</SubSectionHeader>
          <ButtonsWrap>
            <ButtonsWrap>
              <Input placeholder="Name"/>
              <Input placeholder="Email"/>
            </ButtonsWrap>
            <TextAreaWrap>
              <TextArea
                placeholder="Actually I was pretty happy when I saw that you had to listen to a song to travel to moon but I was pretty shaken when they asked me to buy the song for 3M.. I mean that was ok.."
              />
              <LinkButtonWrapper>
                <LinkButtonStyled>Send Message</LinkButtonStyled>
              </LinkButtonWrapper>
            </TextAreaWrap>
          </ButtonsWrap>
        </div>

        <IframeWrapper>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.5061680769754!2d40.958769316308825!3d57.75880888113709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ad4fd9e9a5f6b1%3A0x7292ff2812164172!2z0L_Quy4g0JrQvtC90YHRgtC40YLRg9GG0LjQuCwg0JrQvtGB0YLRgNC-0LzQsCwg0JrQvtGB0YLRgNC-0LzRgdC60LDRjyDQvtCx0LsuLCAxNTYwMDU!5e0!3m2!1sru!2sru!4v1585216951879!5m2!1sru!2sru"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0">
          </iframe>
        </IframeWrapper>

      </ContainerStyled>
    </>
  );
}
