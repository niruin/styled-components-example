import React from 'react';
import styled from 'styled-components';

import { SectionSubBanner } from '../../../../common/page-sections/section-sub-banner';
import { SectionArticles } from '../section-articles';

import bg from '../../../../assets/img/services1.jpg';

const Banner = styled.div`
    backgroundSize: 'inherit',
    backgroundPositionY: -126,
    backgroundColor: '#F9F9F9',
    background: url(${bg}) fixed top center no-repeat
`;

export function Page () {
  return (
    <Banner>
      <SectionSubBanner
        title="Daily Gossip"
        subTitle="The show must go on!"
      />
      <SectionArticles/>
    </Banner>
  );
}
