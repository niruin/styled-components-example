import React from 'react';

import {SectionSubBanner} from '../../../../common/page-sections/section-sub-banner';
import {SectionPricing} from '../../../../common/page-sections/section-pricing';
import {SectionTestimonials} from '../../../../common/page-sections/section-testimonials';
import {SectionServices} from '../section-services';

export function Page() {
  return (
    <>
      <SectionSubBanner title="Services" subTitle="We have Strategy for Serving Things Right" />
      <SectionServices />
      <SectionTestimonials />
      <SectionPricing />
    </>
  );
}
