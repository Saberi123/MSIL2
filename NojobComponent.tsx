import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { normalize } from '../../assets/theme/Typography';
import SIZES from '../../assets/theme/sizes';
import { SvgImgPath } from '../../assets/images';
import { Layout } from '../../assets/theme/Layout';
import Colors from '../../assets/theme/color';
import I18next from '../../Localization/i18n';

interface NojobComponentProps {
  testId?: string;
}

const NojobComponent: React.FC<NojobComponentProps> = ({ testId }) => {
  return (
    <View testID="no_job_container" style={styles.container}>
      <View testID="no_job_svg_container" style={styles.svgContainer}>
        <SvgImgPath.NoJobSVG height={normalize(120)} width={normalize(131)} />
      </View>
      <View testID="no_job_textField" style={styles.textField}>
        <View testID="no_job_textBox1" style={styles.textBox1}>
          <Text style={styles.text1}>{`${I18next.t('Technician.NoNewJobs')}`}</Text>
        </View>
        <View testID="no_job_textBox2" style={styles.textBox2}>
          <Text style={styles.text2} numberOfLines={2}>
            {`${I18next.t('Technician.NoNewJobsDescription')}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NojobComponent;

const styles = StyleSheet.create({
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: Layout.dimensions.margin_25,
    width: normalize(327),
    height: normalize(213),
    marginBottom: Layout.dimensions.margin_10,
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
    paddingHorizontal: normalize(40),
    color: Colors.black,
  },
  textBox1: {
    marginTop: Layout.dimensions.margin_16,
  },
  textBox2: {
    marginTop: Layout.dimensions.margin_5,
  },
  textField: {
    marginHorizontal: Layout.dimensions.margin_16,
  },
});
