import React from 'react';

import { SectionTeam } from '../../../../common/page-sections/section-team';
import { SectionArtwork } from '../../../../common/page-sections/section-artwork';
import { SectionPricing } from '../../../../common/page-sections/section-pricing';
import { SectionTestimonials } from '../../../../common/page-sections/section-testimonials';
import { SectionNews } from '../section-news';
import { SectionIntro } from '../sectiton-intro';
import { PreviewSlider } from '../preview-slider';
import { SectionClients } from '../section-clients';
import { SectionServices } from '../section-services';

export function Page () {
  return (
    <div>
      <PreviewSlider/>
      <SectionIntro/>
      <SectionServices/>
      <SectionTeam/>
      <SectionArtwork/>
      <SectionNews/>
      <SectionPricing/>
      <SectionTestimonials/>
      <SectionClients/>
    </div>
  );
}
