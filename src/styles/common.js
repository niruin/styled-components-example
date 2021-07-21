export const colors = {
  white: '#FFFFFF',
  blue: '#23527c',
  gray: '#8899a6',
  black: '#292f33',
  mediumGray: '#959595',
  lightGray: '#8899a6',
  superLightGray: '#F1F5F8',
};

const deviceSize = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 600,
  tablet: 768,
  laptop: 992,
  desktop: 1280,
};

export const device = {
  mobileS: `(max-width: ${deviceSize.mobileS}px)`,
  mobileM: `(max-width: ${deviceSize.mobileM}px)`,
  mobileL: `(max-width: ${deviceSize.mobileL}px)`,
  tablet: `(max-width: ${deviceSize.tablet}px)`,
  laptop: `(max-width: ${deviceSize.laptop}px)`,
  desktop: `(max-width: ${deviceSize.desktop}px)`,
};
