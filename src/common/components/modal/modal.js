import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Portal} from '../portal';

import sprite from '../../../assets/img/sprite.png';

const ESCAPE_KEY = 27;

function drawing({drawer, isOpenDrawer}) {
  if (drawer && isOpenDrawer) return 0;
  if (drawer && !isOpenDrawer) return '-200%';

  return 0;
}

const Root = styled.div.attrs((props) => ({
  drawer: props.drawer,
  drawing: props.isOpenDrawer,
}))`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  right: ${(props) =>
    drawing({
      drawer: props.drawer,
      isOpenDrawer: props.isOpenDrawer,
    })};
  bottom: 0;
  z-index: 9999;
  overflow: auto;
  background-color: rgba(1, 1, 1, ${({drawer}) => (drawer ? 0.8 : 0.6)});
  transition: 0.7s ease-in-out;
`;

const CloseButton = styled.div`
  background: url(${sprite}) no-repeat;
  background-position-y: -45px;
  background-position-x: -90px;
  width: 45px;
  height: 45px;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  drawer: PropTypes.bool,
};

export function Modal({onClose, children, drawer}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleClose = useCallback( () => {
    if (onClose) {
      onClose();
    }
  },[onClose]);

  useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.keyCode === ESCAPE_KEY) {
        handleClose();
      }
    };

    setIsOpenDrawer(drawer);
    document.body.style.overflow = 'hidden';
    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawer, handleClose]);

  return (
    <Portal root="modal-root">
      <Root drawer={drawer} isOpenDrawer={isOpenDrawer}>
        {onClose && !drawer && <CloseButton onClick={handleClose} />}
        {children}
      </Root>
    </Portal>
  );
}
