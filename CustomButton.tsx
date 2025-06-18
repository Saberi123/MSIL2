import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '../../assets/theme/color';
import { normalize } from '../../assets/theme/Typography';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
  disabled?: boolean;
  textSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = Colors.blue,
  textColor = Colors.white,
  style,
  textStyle,
  testID = 'custom-button',
  disabled = false,
  textSize = normalize(16),
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: disabled ? Colors.disabledColor : backgroundColor },
        style,
      ]}>
      <Text style={[{ color: textColor, fontSize: textSize }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
