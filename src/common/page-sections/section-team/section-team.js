import React from 'react';
import styled from 'styled-components';

import { LinkButton } from '../../components/link-button';

import photo1 from '../../../assets/img/photo1.jpg';
import photo2 from '../../../assets/img/photo2.jpg';
import photo3 from '../../../assets/img/photo3.jpg';
import { Container } from '../../components/container';
import { colors } from '../../../styles/common';
import { SectionHeader } from '../../components/section-header';

const Root = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const TeamBlock = styled.div`
  font-size: 20px;
  line-height: 40px;
  font-weight: 100;
  font-family: MerriweatherLightItalic;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TeamBlockLeft = styled.div`
  background: url(${photo1});
  width: 365px;
  max-width: 100%;
  min-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
`;

const TeamBlockRight = styled.div`
  width: 700px;
  max-width: 100%;
`;

const TeamBlockRightDetail = styled.div`
  text-align: left;
`;

const SocialBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 25px;
  margin-bottom: 15px;
  margin-left: -20px;
`;

const TeamBlockRightDetailParagraph = styled.p`
  font-size: 16px;
  font-family: Merriweather;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 12px;
  color: ${colors.gray};
`;

const IntroBlockRightPersonFirstImg = styled.div`
  background: url(${photo2});
  width: 300px;
  max-width: 100%;
  height: 300px;
`;

const IntroBlockRightPersonSecondImg = styled.div`
  background: url(${photo3});
  max-width: 100%;
  width: 300px;
  height: 300px;
  background-position-x: center;
`;

const IntroBlockRightPersons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-family: Roboto;
`;

const TeamBlockRightSubHeader = styled.h2`
  font-family: Roboto;
  margin-bottom: 0;
`;

export function SectionTeam () {
  return (
    <Root>
      <Container direction="column">
        <SectionHeader>the pack</SectionHeader>
        <TeamBlock>
          <TeamBlockLeft/>
          <TeamBlockRight>
            <TeamBlockRightDetail>
              <TeamBlockRightSubHeader>Mark Waugh</TeamBlockRightSubHeader>
              <TeamBlockRightDetailParagraph>
                Mark is the coolest person yet so talented that he had a hard time in the Fox River State Penitentiary
                along with the two members of KORA mafia.
              </TeamBlockRightDetailParagraph>
              <SocialBlock>
                <LinkButton>Facebook</LinkButton>
                <LinkButton>Tweeter</LinkButton>
                <LinkButton>Behance</LinkButton>
                <LinkButton>Google</LinkButton>
              </SocialBlock>
            </TeamBlockRightDetail>

            <IntroBlockRightPersons>
              <div>
                <IntroBlockRightPersonFirstImg/>
                <div>shane bond</div>
              </div>
              <div>
                <IntroBlockRightPersonSecondImg/>
                <div>shane bond</div>
              </div>
            </IntroBlockRightPersons>
          </TeamBlockRight>
        </TeamBlock>
      </Container>
    </Root>
  );
}
