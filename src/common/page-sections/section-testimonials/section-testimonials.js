import React, {useState} from 'react';
import styled from 'styled-components';

import photo3 from '../../../assets/img/bg/testi.jpg';
import {colors} from '../../../styles/common';

const Root = styled.div`
  text-align: center;
  padding: 140px 0;
  background: url(${photo3});
`;

const WrapSlides = styled.div`
  width: 899px;
  max-width: 100%;
  margin: auto;
  color: white;
  display: flex;
`;

const DotsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Unit = styled.div.attrs((props) => ({open: props.open}))`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.open ? colors.white : colors.gray)};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const SlideBlock = styled.div`
  min-height: 160px;
`;

const SlideParagraph = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  font-weight: 100px;
`;

const SlideFooter = styled.div`
  color: #8899a6;
  font-size: 14px;
`;

export function SectionTestimonials() {
  const [stageActive, setStageActive] = useState(0);

  const handleClick = (stage) => {
    setStageActive(stage);
  };

  return (
    <Root>
      <WrapSlides>
        {stageActive === 0 && (
          <SlideBlock>
            <SlideParagraph>
              “I’m amazed at how they handeled everything from my brief to the final designs for our Clothing line.
              These people are really talented! Highly Recommended! Five stars.”
            </SlideParagraph>
            <SlideFooter>DON Vito, Corleone Clothing</SlideFooter>
          </SlideBlock>
        )}
        {stageActive === 1 && (
          <SlideBlock>
            <SlideParagraph>
              “These people are really talented! I’m amazed at how they handeled everything from my brief to the final
              designs for our Clothing line. Five stars, Highly Recommended!”
            </SlideParagraph>
            <SlideFooter>DON Vito, Corleone Clothing</SlideFooter>
          </SlideBlock>
        )}
        {stageActive === 2 && (
          <SlideBlock>
            <SlideParagraph>
              “Highly Recommended! These people are really talented! I’m amazed at how they handeled everything from my
              brief to the final designs for our Clothing line. Five stars.”
            </SlideParagraph>
            <SlideFooter>DON Vito, Corleone Clothing</SlideFooter>
          </SlideBlock>
        )}
      </WrapSlides>
      <DotsBlock>
        <Unit open={stageActive === 0} onClick={() => handleClick(0)} />
        <Unit open={stageActive === 1} onClick={() => handleClick(1)} />
        <Unit open={stageActive === 2} onClick={() => handleClick(2)} />
      </DotsBlock>
    </Root>
  );
}
