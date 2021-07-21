import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LinkButton } from '../link-button';
import { colors, device } from '../../../styles/common';

const Root = styled.div`
  flex-basis: 33%;
  margin-top: 12px;
  text-align: center;
  background-color: white;
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  box-sizing: border-box;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: box-shadow 0.4s ease-in-out;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    transition: box-shadow 0.4s ease-in-out;
  }
  
  @media ${device.tablet} {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const HeadBlock = styled.div`
  margin: auto;
  width: 240px;
  max-width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccd6dd;
`;

const PriceBlock = styled.div`
  font-size: 30px;
  font-family: Roboto;
  text-transform: uppercase;
  color: ${colors.black};
  font-weight: bold;
  margin: 20px 0 10px;
`;

const TitleBlock = styled.div`
  font-size: 16px;
  font-family: Roboto;
  text-transform: uppercase;
  color: ${colors.black};
  font-weight: bold;
  margin: 10px 0;
`;

const ConditionBlock = styled.div`
  color: ${colors.gray};
  font-family: Merriweather;
  font-size: 14px;
  line-height: 40px;
  margin: 25px 0 30px;
`;

const OrderBtn = styled.div`
  margin: auto;
  display: inline-block;
`;

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  children: PropTypes.node
};

const LinkButtonStyled = styled(LinkButton)`
  font-size: 16px;
  font-family: Merriweather;
`;

export function Card ({ title, price, children }) {
  return (
    <Root>
      <HeadBlock>
        <TitleBlock>::{title}::</TitleBlock>
        <PriceBlock>${price}</PriceBlock>
      </HeadBlock>
      <ConditionBlock>
        {children}
      </ConditionBlock>
      <OrderBtn>
        <LinkButtonStyled>Confirm Order</LinkButtonStyled>
      </OrderBtn>
    </Root>
  );
}
