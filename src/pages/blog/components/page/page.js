import React from 'react';

import {SectionSubBanner} from '../../../../common/page-sections/section-sub-banner';
import {SectionArticles} from '../section-articles';

export function Page() {
  return (
    <div>
      <SectionSubBanner title="Daily Gossip" subTitle="The show must go on!" />
      <SectionArticles />
    </div>
  );
}
