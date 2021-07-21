import React from 'react';
import styled from 'styled-components';

import {Container} from '../../../../common/components/container';

import american from '../../../../assets/img/clients/american.jpg';
import twenty from '../../../../assets/img/clients/twenty.jpg';
import dog from '../../../../assets/img/clients/dog.jpg';
import argentina from '../../../../assets/img/clients/argentina.jpg';
import mason from '../../../../assets/img/clients/mason.jpg';
import room from '../../../../assets/img/clients/room.jpg';

const Root = styled.div`
  padding: 100px 0;
`;

const Title = styled.div`
  margin: 0 0 50px;
  font-weight: bold;
  font-family: Merriweather;
  font-size: 16px;
  text-align: center;
`;

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContentBlockChild = styled.div.attrs((props) => ({url: props.img}))`
  width: 180px;
  height: 150px;
  opacity: 0.6;
  cursor: pointer;
  margin: auto;

  &:hover {
    opacity: 1;
  }

  &:nth-child(n) {
    background: url(${(props) => props.img});
    background-position-x: center;
    background-position-y: center;
    background-size: contain;
  }
`;

export function SectionClients() {
  return (
    <Root>
      <Container direction="column">
        <Title>Some awesome clients</Title>
        <ContentBlock>
          <ContentBlockChild img={american} />
          <ContentBlockChild img={twenty} />
          <ContentBlockChild img={dog} />
          <ContentBlockChild img={argentina} />
          <ContentBlockChild img={mason} />
          <ContentBlockChild img={room} />
        </ContentBlock>
      </Container>
    </Root>
  );
}
