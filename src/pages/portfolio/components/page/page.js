import React from 'react';

import { SectionSubBanner } from '../../../../common/page-sections/section-sub-banner';
import { SectionArtwork } from '../../../../common/page-sections/section-artwork';

export function Page () {
  return (
    <div>
      <SectionSubBanner title="Portfolio 3 Col" subTitle="We believe that the work we do is a reflection"/>
      <SectionArtwork/>
    </div>
  );
}
