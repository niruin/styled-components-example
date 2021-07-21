import React, { useState } from 'react';
import styled from 'styled-components';

import slide1 from '../../../../assets/img/slide1.jpg';
import slide2 from '../../../../assets/img/slide2.jpg';
import arrow from '../../../../assets/svg/arrow.svg';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${slide2});
  background-position: center;
  position: relative;
  backgroundSize: cover;
`;

const Fade = styled.div`
  width: 100%;
  height: 100vh;
  visibility: visible;
  opacity: 1;
  transition: opacity ${props => props.timeout}s linear;
  opacity: ${props => props.in === 'true' ? 0 : 1};
  background: url(${slide1});
  background-position: center;
  background-size: cover;
`;

const SliderBtn = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  padding: 60px 20px;
  font-size: 0;
  background-color: rgba(0,0,0,0.2);
  background-image: url(${arrow});
  cursor: pointer;
  background-position: initial;
  background-repeat: round;
  transform: ${props => props.position === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'};
  right: ${props => props.position === 'left' ? 'auto' : '0'};
`;

export function PreviewSlider () {
  const [checked, toggle] = useState(false);

  const handleToggle = () => {
    toggle(!checked);
  };

  return (
    <Root>
      <Fade timeout = { 0.6 } in = { checked.toString() }/>
      <SliderBtn position="left" onClick={ handleToggle }/>
      <SliderBtn position="right" onClick={ handleToggle }/>
    </Root>
  );
}
