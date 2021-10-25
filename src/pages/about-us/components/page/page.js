import React from 'react';

import {SectionTeam} from '../../../../common/page-sections/section-team';
import {SectionSubBanner} from '../../../../common/page-sections/section-sub-banner';

import {SectionHistory} from '../section-history';
import {SectionServices} from '../section-services';

export function Page() {
  return (
    <div>
      <SectionSubBanner title="About Us" subTitle="We believe that the work we do is a reflection" />
      <SectionHistory />
      <SectionServices />
      <SectionTeam />
    </div>
  );
}
