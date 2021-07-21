import React from 'react';
import styled from 'styled-components';

import { Card } from '../../components/card';
import { Container } from '../../components/container';
import { SectionHeader } from '../../components/section-header';

const Root = styled.div`
  padding: 100px 0;
  background-color: #f1f5f8;
`;

const SectionWrapperCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export function SectionPricing () {
  return (
    <Root>
      <Container direction="column">
        <SectionHeader>pricing plans</SectionHeader>
        <SectionWrapperCards>
          <Card title="basic" price="49" link="#">
            <div>Identity Design</div>
            <div>Complete Branding</div>
            <div>Optional Photoshoot</div>
            <div>Printed Business Cards</div>
          </Card>
          <Card title="advanced" price="89" link="#">
            <div>Identity Design</div>
            <div>Complete Branding</div>
            <div>Optional Photoshoot</div>
            <div>Printed Business Cards</div>
          </Card>
          <Card title="professional" price="199" link="#">
            <div>Identity Design</div>
            <div>Complete Branding</div>
            <div>Optional Photoshoot</div>
            <div>Printed Business Cards</div>
          </Card>
        </SectionWrapperCards>
      </Container>
    </Root>
  );
}
