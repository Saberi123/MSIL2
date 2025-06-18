import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';

type DividerProps = {
  color?: string;
  borderBottomWidth?: number;
  marginVertical?: number;
  extraStyle?: object;
};

const Divider: React.FC<DividerProps> = ({
  color = Colors.borderColor,
  borderBottomWidth = 1,
  extraStyle,
  marginVertical = Layout.dimensions.borderRadius_10,
}) => {
  return (
    <View
      testID="divider"
      style={[
        styles.divider,
        {
          borderColor: color,
          borderBottomWidth: borderBottomWidth,
          marginVertical,
        },
        extraStyle,
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});
