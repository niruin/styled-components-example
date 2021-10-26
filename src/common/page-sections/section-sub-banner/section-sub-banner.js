import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import banner from '../../../assets/img/services2.jpg';
import {Container} from '../../components/container';

const Root = styled.div`
  padding: 80px 0;
  margin-bottom: 30px;
  background: url(${banner}) fixed center center no-repeat;
  width: 100%;
  background-size: cover;
  font-family: RobotoThin, sans-serif;
`;

const Title = styled.p`
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 15px;
  font-size: 72px;
  text-shadow: 1px 1px 3px white;
`;

const SubTitle = styled.p`
  font-family: Roboto, sans-serif;
  margin-top: 0;
  font-size: 14px;
  text-shadow: 1px 1px 3px white;
`;

SectionSubBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

export function SectionSubBanner({title, subTitle}) {
  return (
    <Root>
      <Container direction="column">
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </Root>
  );
}
