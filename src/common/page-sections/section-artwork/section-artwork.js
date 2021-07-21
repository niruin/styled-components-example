import React from 'react';

import { SectionHeader } from '../../components/section-header/section-header';
import { Container } from '../../components/container';
import { ListTiles } from '../list-tiles';

import { tiles } from './consts';

export function SectionArtwork () {
  return (
    <div>
      <Container>
        <SectionHeader>Artwork</SectionHeader>
      </Container>
      <ListTiles tiles={tiles}/>
    </div>
  );
}
