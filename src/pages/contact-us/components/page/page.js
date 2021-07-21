import React from 'react';

import {SectionSubBanner} from '../../../../common/page-sections/section-sub-banner';
import {SectionContact} from '../section-contact';

import bg from '../../../../assets/img/contactbg.jpg';

export function Page() {
  return (
    <div>
      <SectionSubBanner title="Contact Us" subTitle="Any day, any time of the day!" bg={bg} />
      <SectionContact />
    </div>
  );
}
