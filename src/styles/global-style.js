import {createGlobalStyle} from 'styled-components';
import RobotoThin from './fonts/roboto/Roboto-Thin.ttf';
import RobotoRegular from './fonts/roboto/Roboto-Regular.ttf';
import Merriweather from './fonts/merriweather/Merriweather-LightItalic.ttf';
import MerriweatherRegular from './fonts/merriweather/Merriweather-Regular.ttf';
import {colors} from './common';

function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
     @font-face {
      font-family: ${name};
      src: url(${src}) format("truetype");
      font-weight: ${fontWeight};
      font-style: ${fontStyle};
    }
  `;
}

export const GlobalStyle = createGlobalStyle`
  ${fontFace('Roboto', RobotoRegular)}
  ${fontFace('MerriweatherRegular', MerriweatherRegular)}
  ${fontFace('RobotoThin', RobotoThin, 'normal', 'italic')}
  ${fontFace('Merriweather', Merriweather, 'normal', 'italic')}

  body {
    margin: 0;
    color: ${colors.black};
    font-family: MerriweatherRegular, serif;
    background-color: white;
  }
`;
