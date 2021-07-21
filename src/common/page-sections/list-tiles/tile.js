import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ActionButton } from '../../components/action-button';
import { Modal } from '../../components/modal';
import { DrawerEmpatia } from '../../page-drawers/drawer-empatia';
import { colors } from '../../../styles/common';

const Root = styled.div.attrs(props => ({
  level: props.level,
  img: props.img
}))`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;
  height: ${props => props.level ? '200px' : '400px'};
  background-image: url(${props => props.img});
`;

const InnerBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  opacity: 0;
  transition: opacity 0.4s ease-out;

  &:hover {
    opacity: 1;
    transition: opacity 0.4s ease-out
  }
`;

const TileContent = styled.div`
  text-align: center;
  margin: auto;
  color: ${colors.gray};
  font-style: italic;
`;

const TileHeader = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 16px;
  color: ${colors.white};
  font-style: normal;
`;

const TileDescription = styled.p`
  font-family: Merriweather;
  font-size: 14px;
  color: ${colors.gray};
`;

const TileWrapButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 20px;
`;

const Slide = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 12px rgba(0,0,0,0.5);
  max-width: 100%;
`;

const SlideImg = styled.img`
  max-width: 100%;
`;

Tile.propTypes = {
  level: PropTypes.bool,
  tile: PropTypes.object
};

export function Tile ({ level, tile }) {
  const [isOpenModal, toggleModal] = useState(false);
  const [isOpenDrawer, toggleDrawer] = useState(false);

  const handleShowModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const handleShowDrawer = () => {
    toggleDrawer(true);
  };

  const handleCloseDrawer = () => {
    toggleDrawer(false);
  };

  return (
    <Root img={tile.path} level={level}>
      <InnerBlock>
        <TileContent>
          <TileHeader>{tile.header}</TileHeader>
          <TileDescription>{tile.description}</TileDescription>
          <TileWrapButtons>
            <ActionButton open={isOpenDrawer} type="link" onClick={handleShowDrawer}>
              <Modal onClose={handleCloseDrawer} drawer={true}>
                <DrawerEmpatia onClose={handleCloseDrawer}/>
              </Modal>
            </ActionButton>
            <ActionButton open={isOpenModal} onClick={handleShowModal}>
              <Modal onClose={handleCloseModal}>
                <Slide>
                  <SlideImg src={tile.path} alt="img"/>
                </Slide>
              </Modal>
            </ActionButton>
          </TileWrapButtons>
        </TileContent>
      </InnerBlock>
    </Root>
  );
}
