import React from 'react';

import {SectionSubBanner} from '../../../../common/page-sections/section-sub-banner';
import {SectionPricing} from '../../../../common/page-sections/section-pricing';
import {SectionTestimonials} from '../../../../common/page-sections/section-testimonials';
import {SectionServices} from '../section-services';

export function Page() {
  return (
    <>
      <SectionSubBanner title="About Us" subTitle="We believe that the work we do is a reflection" />
      <SectionServices />
      <SectionTestimonials />
      <SectionPricing />
    </>
  );
}
