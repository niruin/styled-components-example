import React, {useState} from 'react';
import styled from 'styled-components';

import {Container} from '../../../common/components/container';
import {ExtendButton} from '../../../common/components/extend-button';
import {LinkButton} from '../../../common/components/link-button';
import {Modal} from '../../../common/components/modal';
import {Plug} from '../../../common/modals/plug';

import {device} from '../../../styles/common';
import logo from '../../../assets/img/logo_circle.png';

const Root = styled.div`
  padding: 80px 0;
  background-color: #f1f5f8;
`;

const SocialLinkBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const InfoBlockItem = styled.div.attrs((props) => ({align: props.align}))`
  width: 160px;
  text-align: ${(props) => (props.align === 'right' ? 'right' : 'left')};

  @media all and (max-width: 769px) {
    width: 100%;
  }
`;

const InfoBlockHeader = styled.h6`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Roboto, Helvetica, sans-serif;
`;

const InfoBlockContent = styled.div`
  color: #292f33;
  font-size: 14px;
`;

const InfoBlockImg = styled.img`
  margin-top: 50px;
`;

export function LayoutFooter() {
  const [isOpenModal, setModal] = useState(false);

  const onSetOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <Root>
      <Container direction="column">
        <SocialLinkBlock>
          <LinkButton>Facebook</LinkButton>
          <LinkButton>Google+</LinkButton>
          <LinkButton>Twitter</LinkButton>
          <LinkButton>Behance</LinkButton>
          <LinkButton>Dribble</LinkButton>
          <LinkButton>Pinterest</LinkButton>
          <LinkButton>Instagram</LinkButton>
        </SocialLinkBlock>
        <InfoBlock>
          <InfoBlockItem>
            <InfoBlockHeader>mora studio</InfoBlockHeader>
            <InfoBlockContent>
              <p>35 elm st</p>
              <p>Rugaong, 12569</p>
              <p>Dublin</p>
            </InfoBlockContent>
            <ExtendButton onClick={onSetOpenModal}>Locate on map</ExtendButton>
          </InfoBlockItem>
          <div align="center">
            <InfoBlockImg src={logo} alt="logo" />
          </div>
          <InfoBlockItem align="right">
            <InfoBlockHeader>contact info</InfoBlockHeader>
            <InfoBlockContent>
              <p>P: 123 4569 789-95</p>
              <p>E: hello@mora.com</p>
              <p>sales@mora.com</p>
            </InfoBlockContent>
            <ExtendButton onClick={onSetOpenModal}>Write to us</ExtendButton>
            {isOpenModal &&
              <Modal onClose={handleCloseModal}>
                <Plug onClose={handleCloseModal}/>
              </Modal>
            }
          </InfoBlockItem>
        </InfoBlock>
      </Container>
    </Root>
  );
}
