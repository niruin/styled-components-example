import React, {useState} from 'react';
import styled from 'styled-components';

import {Container} from '../../../../common/components/container';
import {ExtendButton} from '../../../../common/components/extend-button';
import {Modal} from '../../../../common/components/modal';
import {Plug} from '../../../../common/modals/plug';

import {colors, device} from '../../../../styles/common';

const Root = styled.div`
  text-align: center;
  padding: 120px 0;

  @media ${device.mobileM} {
    padding: 120px 0 0;
  }
`;

const IntroBlock = styled.div`
  margin: auto;
  width: 680px;
  max-width: 100%;
  font-size: 20px;
  line-height: 40px;
  color: ${colors.black};
  font-weight: 100;
  font-family: Merriweather, sans-serif;
`;

const ExtendButtonStyled = styled(ExtendButton)`
  width: max-content;
  margin: auto;
`;

export function SectionIntro() {
  const [isOpenModal, setModal] = useState(false);

  const onSetOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <Root>
      <IntroBlock>
        <Container direction='column'>
          <p>
            We understand the importance of approaching each work integrally and believe in the power of
            <strong> simple and easy communication.</strong>
          </p>
          <ExtendButtonStyled onClick={onSetOpenModal}>Know More</ExtendButtonStyled>
        </Container>
      </IntroBlock>
      {isOpenModal &&
        <Modal onClose={handleCloseModal}>
          <Plug onClose={handleCloseModal}/>
        </Modal>
      }
    </Root>
  );
}
