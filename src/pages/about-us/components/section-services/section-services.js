import React from 'react';
import styled from 'styled-components';

import {Container} from '../../../../common/components/container';
import {NoteParagraph} from '../../../../common/components/note-paragraph';
import {ActionCard} from '../../../../common/components/action-card';

import icon1 from '../../../../assets/img/card-icon/icon1.png';
import icon2 from '../../../../assets/img/card-icon/icon2.png';
import icon3 from '../../../../assets/img/card-icon/icon3.png';

const Root = styled.div`
  background-color: #f1f5f8;
`;

const CardTitle = styled.div`
  margin-top: 90px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    margin-top: -60px;
    left: 50%;
    transform: translate(-50%);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CardTitleIcon = styled(CardTitle).attrs((props) => ({img: props.img}))`
  margin-top: 165px;

  &:before {
    background-image: url(${(props) => props.img});
  }
`;

const WrapperBlockCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const NoteParagraphStyled = styled(NoteParagraph)`
  margin-top: 20px;
`;

const LoremIpsum = "I never thought I could feel so free doing it our way. Nothin's gonna turn us back.";

function Card(icon, title) {
  return (
    <ActionCard dark={true}>
      <CardTitleIcon img={icon}>{title}</CardTitleIcon>
      <div>
        <CardTitle>{title}</CardTitle>
        <NoteParagraphStyled>{LoremIpsum}</NoteParagraphStyled>
      </div>
    </ActionCard>
  );
}

export function SectionServices() {
  return (
    <Root>
      <Container>
        <WrapperBlockCards>
          {Card(icon1, 'branding')}
          {Card(icon2, 'photography')}
          {Card(icon3, 'developer')}
        </WrapperBlockCards>
      </Container>
    </Root>
  );
}
