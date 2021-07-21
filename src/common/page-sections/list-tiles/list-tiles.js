import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Tile} from './tile';

import {device} from '../../../styles/common';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: red;
`;

const WrapTiles = styled.div`
  flex-basis: 25%;

  @media ${device.laptop} {
    flex-basis: 50%;
  }

  @media ${device.mobileM} {
    flex-basis: 100%;
  }
`;

ListTiles.propTypes = {
  tiles: PropTypes.array,
};

export function ListTiles({tiles}) {
  let count = false;

  return (
    <Root>
      {tiles.map((tile, index) => {
        if (index % 2 !== 0) {
          return null;
        }
        count = !count;
        return (
          <WrapTiles key={index}>
            <Tile level={count} tile={tiles[index]} />
            {tiles[index + 1] && <Tile level={!count} tile={tiles[index + 1]} />}
          </WrapTiles>
        );
      })}
    </Root>
  );
}
