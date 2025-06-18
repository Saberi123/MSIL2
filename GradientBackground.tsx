import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import {
  View,
  ViewStyle,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Colors from '../../assets/theme/color';
import { normalize } from '../../assets/theme/Typography';

const { height, width } = Dimensions.get('window');

interface GradientBackgroundProps {
  colors?: string[];
  children: React.ReactNode;
  style?: ViewStyle;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors = ['#C7DDF890', '#F0FAE0', '#C7DDF890'],
  children,
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.background, style]}
      start={{ x: 0, y: 0.9 }}
      end={{ x: 1.3, y: 0 }}
      locations={[0.5, 1, 0.5]}>
      {Platform.OS == 'android' && (
        <>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor={Colors.transparent}
          />
          <View style={{ marginTop: normalize(20) }} />
        </>
      )}
      <SafeAreaView style={{ flexGrow: 1 }}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  } as ViewStyle,
});

export default GradientBackground;
