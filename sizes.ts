import { Dimensions } from 'react-native';
import { normalize } from './Typography';
const { width, height } = Dimensions.get('window');

const SIZES = {
  // global sizes
  base: normalize(8),
  font: normalize(14),
  radius: normalize(12),
  padding: normalize(24),
  margin: normalize(20),

  // font sizes
  largeTitle: normalize(40),
  h1: normalize(30),
  h2: normalize(22),
  h3: normalize(16),
  h4: normalize(14),
  h5: normalize(12),
  body1: normalize(30),
  body2: normalize(22),
  body3: normalize(16),
  body4: normalize(14),
  body5: normalize(12),
  font18: normalize(18),
  font16: normalize(16),
  font20: normalize(20),
  font12: normalize(12),
  font14: normalize(14),

  // app dimensions
  width,
  height,
  borderWidth2: normalize(2),

  //borderRadius
  borderRadius_5: normalize(5),

  // padding
  padding_40: normalize(40),
  padding_16: normalize(16),
  padding_10: normalize(10),
  padding_5: normalize(5),
  padding_2: normalize(2),

  //margin
  margin_5: normalize(5),
  margin_10: normalize(10),
  margin_16: normalize(16),
  margin_32: normalize(32),

  //icon size
  icon_size: normalize(25),
};

export default SIZES;
