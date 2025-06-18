import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '../assets/theme/Layout';
import Colors from '../assets/theme/color';
import I18next from 'i18next';
import { SvgImgPath } from '../assets/images';
import { normalize } from '../assets/theme/Typography';
import SIZES from '../assets/theme/sizes';

interface NoPastRequestProps {
  testID?: string;
}

const NoPastRequest: React.FC<NoPastRequestProps> = ({ testID }) => {
  return (
    <View testID="no-job-container" style={styles.container}>
      <SvgImgPath.NoJobSVG
        height={normalize(150)}
        width={normalize(170)}
        style={styles.noPastRequestSvg}
      />
      <View testID="no-job-textField" style={styles.textField}>
        <View testID="no-job-textBox1" style={styles.textBox1}>
          <Text testID="no-job-text1" style={styles.text1}>{I18next.t('History.NoPastRequests')}</Text>
        </View>
      </View>
    </View>
  );
};

export default NoPastRequest;

const styles = StyleSheet.create({
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: SIZES.font20,
    textAlign: 'center',
    fontFamily: 'Roboto.regular',
    color: Colors.black,
  },
  text2: {
    fontSize: SIZES.font16,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Roboto.regular',
    color: Colors.black,
  },
  textBox1: {
    marginTop: Layout.dimensions.margin_18,
  },
  textBox2: {
    marginTop: Layout.dimensions.margin_6,
  },
  textField: {},
  noPastRequestSvg: {
      borderRadius: 170,
      height: normalize(170),
      width: normalize(170),
    }
});
