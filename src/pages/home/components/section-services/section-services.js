import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../../common/components/container';
import { ExtendButton } from '../../../../common/components/extend-button';

import { colors, device } from '../../../../styles/common';
import services1 from '../../../../assets/img/services1.jpg';
import services2 from '../../../../assets/img/services2.jpg';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.black};
`;

const IntroBlock = styled.div`
  flex-basis: 50%;
  
  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

const IntroBlockChild = styled(IntroBlock).attrs(props => ({ img: props.img }))`
  background: url(${props => props.img});
  background-position: center;
  background-size: cover;
  height: 600px;
  
  @media ${device.tablet} {
    min-height: 200px;
  }
`;

const IntroBlockContent = styled.div`
  max-width: 620px;
  padding-bottom: 40px;
  padding: 90px;
  
  @media ${device.tablet} {
    padding: 90px 0;
  }
`;

const IntroBlockHeader = styled.h2`
  font-size: 60px;
  font-weight: bold;
  font-family: Roboto;
`;

const IntroBlockSubHeader = styled.p`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: bold;
`;

const IntroBlockParagraph = styled.p`
  font-size: 14px;
  font-family: Merriweather;
  padding-left: 20px;
  margin-top: 30px;
  border-left: 10px solid #292f33;
  line-height: 30px;
  color: ${colors.gray};
`;

const IntroBlockFourHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: Roboto;
`;

const IntroBlockFourBricks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IntroBlockFourBrickUnit = styled.div`
  flex-basis: 50%;
    
  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

const IntroBlockFourBrickUnitParagraph = styled.p`
  font-size: 14px;
  font-family: Merriweather;
  line-height: 30px;
  flex-basis: 50%;
  color: ${colors.gray};
`;

export function SectionServices () {
  return (
    <Root>
      <IntroBlock>
        <Container content="flex-end">
          <IntroBlockContent>
            <IntroBlockHeader>We Create Stuff </IntroBlockHeader>
            <IntroBlockSubHeader>
              And believe that the work we do is a reflection of what we are.
            </IntroBlockSubHeader>
            <IntroBlockParagraph>
              It took just as much effort to get back to where he had been earlier and was once more watching his legs
              as
              they struggled against each even harder than before, if that was possible, he could think of no once more
              possible for him to stay in bed and that the most sensible
            </IntroBlockParagraph>
            <ExtendButton>View our Work</ExtendButton>
          </IntroBlockContent>
        </Container>
      </IntroBlock>

      <IntroBlockChild img={services1}/>
      <IntroBlockChild img={services2}/>

      <IntroBlock>
        <Container>
          <IntroBlockContent>
            <IntroBlockFourHeader>
              From Pro VFX to simple Photo
              Retouching, we’re Kickass!
            </IntroBlockFourHeader>
            <IntroBlockSubHeader>
              We are a team of eight sharing our expertise in Professional level
              Animation to Branding, Packaging and pretty Photography
            </IntroBlockSubHeader>
            <IntroBlockFourBricks>
              <IntroBlockFourBrickUnit>
                <h4>BRANDING & IDENTITY</h4>
                <IntroBlockFourBrickUnitParagraph>
                  We are a team of eight sharing our expertise in Professional level Animation to Branding, Packaging
                  and pretty Photography
                </IntroBlockFourBrickUnitParagraph>
              </IntroBlockFourBrickUnit>
              <IntroBlockFourBrickUnit>
                <h4>BRANDING & IDENTITY</h4>
                <IntroBlockFourBrickUnitParagraph>
                  We are a team of eight sharing our expertise in Professional level Animation to Branding, Packaging
                  and pretty Photography
                </IntroBlockFourBrickUnitParagraph>
              </IntroBlockFourBrickUnit>
              <IntroBlockFourBrickUnit>
                <h4>BRANDING & IDENTITY</h4>
                <IntroBlockFourBrickUnitParagraph>
                  We are a team of eight sharing our expertise in Professional level Animation to Branding, Packaging
                  and pretty Photography
                </IntroBlockFourBrickUnitParagraph>
              </IntroBlockFourBrickUnit>
              <IntroBlockFourBrickUnit>
                <h4>BRANDING & IDENTITY</h4>
                <IntroBlockFourBrickUnitParagraph>
                  We are a team of eight sharing our expertise in Professional level Animation to Branding, Packaging
                  and pretty Photography
                </IntroBlockFourBrickUnitParagraph>
              </IntroBlockFourBrickUnit>
            </IntroBlockFourBricks>
          </IntroBlockContent>
        </Container>
      </IntroBlock>
    </Root>
  );
}
