import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import banner from '../../../assets/img/services2.jpg';
import { Container } from '../../components/container';

const Root = styled.div`
  padding: 80px 0;
  background: url(${banner}) fixed center center no-repeat;
  width: 100%;
  background-size: cover;
  font-family: RobotoThin;
`;

const Title = styled.p`
  font-weight: 100px;
  margin-bottom: 0;
  margin-top: 15px;
  font-size: 72px;
`;

const SubTitle = styled.p`
  font-family: Roboto;
  margin-top: 0;
  font-size: 14px;
`;

SectionSubBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string
};

export function SectionSubBanner ({ title, subTitle, className }) {
  return (
    <Root>
      <Container direction="column">
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </Root>
  );
}
