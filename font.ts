import SIZES from './sizes';
import { fontsSize, normalize } from './Typography';

const FONTS = {
  largeTitle: { fontFamily: '', fontSize: SIZES.largeTitle },
  h1: { fontFamily: '', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: '', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.h3, lineHeight: 18 },
  h4: { fontFamily: '', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: '', fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontFamily: '', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: '', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: '', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: '', fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: '', fontSize: SIZES.body5, lineHeight: 22 },

  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  thin: 'Roboto-Thin',
  black: 'Roboto-Black',
  medium: 'Roboto-Medium',
  boldItalic: 'Roboto-BoldItalic',
  light: 'Roboto-Light',
};

export default FONTS;
