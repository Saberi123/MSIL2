import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
/**
 * normalize function return's integer value for font size
 */
export function normalize(size: any) {
    return Math.round(deviceWidth * (size / 375));
}

export const fontsSize = {
    verySmall: normalize(10),
    small: normalize(12),
    default: normalize(14),
    medium: normalize(16),
    large: normalize(18),
    extraLarge: normalize(20),
    h1: normalize(28),
    h2: normalize(24),
    h3: normalize(20),
    h4: normalize(16),
    h5: normalize(12),
    bodyXXS: normalize(6),
    footnote: normalize(8),
    lineHeight: (scale: any) => {
        return normalize(scale) * 1.15 * fontScale;
    },
};

