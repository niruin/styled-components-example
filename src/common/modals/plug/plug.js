import styled from 'styled-components';

import {ExtendButton} from '../../components/extend-button';

const Root = styled.div`
  padding: 20px;
  width: 450px;
  max-width: 100%;
  min-height: 100px;
  margin: auto;
  background-color: white;
`;

const Header = styled.div`
  font-size: 38px;
  font-weight: bold;
  font-family: Roboto,sans-serif;
`

const Paragraph = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-family: Merriweather,sans-serif;
  font-weight: bold;
`

export function Plug ({onClose}) {
  return(
    <Root>
      <Header>Notice</Header>
      <Paragraph>
        This site was made for educational purposes, the layout of the site was taken from free sources.
      </Paragraph>
      <ExtendButton onClick={onClose}>Close</ExtendButton>
    </Root>
  )
}