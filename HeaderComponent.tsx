import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import VectorIcon from '../../assets/VectorIcon';
import Colors from '../../assets/theme/color';
import { normalize } from '../../assets/theme/Typography';
import { Layout } from '../../assets/theme/Layout';
import SIZES from '../../assets/theme/sizes';
import FONTS from '../../assets/theme/font';

interface HeaderComponentProps {
  headerText: string;
  testId?: string;
  rightText?: string;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  onPressRightText?: () => void;
  extraStyle?: object;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  headerText,
  testId,
  rightText,
  onPressLeftIcon,
  onPressRightIcon,
  onPressRightText,
  extraStyle,
}) => {
  return (
    <View style={styles.container}>
      {onPressLeftIcon && (
        <View style={styles.leftIconContainer}>
          <TouchableOpacity
            testID="driver_header_left_botton"
            onPress={onPressLeftIcon}>
            <VectorIcon
              iconType="AntDesign"
              iconName="arrowleft"
              color={Colors.black}
              size={normalize(24)}
              style={{
                fontWidth: 'bold',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.headerTextContainer}>
        <Text
          testID="driver_header_text"
          style={[styles.headerText, extraStyle]}>
          {headerText}
        </Text>
      </View>
      {onPressRightIcon && (
        <View
          testID="driver_header_right_icon"
          style={styles.rightIconContainer}>
          <TouchableOpacity
            testID="driver_header_right_botton"
            onPress={onPressRightIcon}>
            <VectorIcon
              iconType="Ionicons"
              iconName="call-outline"
              color={Colors.black}
              size={normalize(24)}
              style={{
                fontWidth: 'bold',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      {rightText && (
        <View
          testID="driver_header_right_text_container"
          style={styles.rightTextContainer}>
          <TouchableOpacity
            testID="driver_header_right_text"
            onPress={onPressRightText}>
            <Text style={styles.rightHeaderText}>{rightText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: normalize(44),

    marginHorizontal: Layout.dimensions.margin_20,
    marginTop: Layout.dimensions.margin_15,
  },
  leftIconContainer: {
    height: normalize(44),
    width: normalize(44),
    borderRadius: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white70,
  },
  rightIconContainer: {
    height: normalize(44),
    width: normalize(44),
    borderRadius: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white70,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: SIZES.font20,
    fontFamily: FONTS.regular,
    color: Colors.black,
    textAlign: 'center',
  },
  rightTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeaderText: {
    fontSize: SIZES.font14,
    fontFamily: FONTS.bold,
    color: Colors.blue,
  },
});
