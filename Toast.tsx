import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgImgPath } from '../assets/images';
import Colors from '../assets/theme/color';
import FONTS from '../assets/theme/font';
import { Layout } from '../assets/theme/Layout';
import { normalize } from '../assets/theme/Typography';

// Define types for Toast component props
interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
  testID?: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Auto-dismiss the toast after duration
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        if (onClose) onClose();
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Gradient colors based on type
  const gradientColors: { [key in NonNullable<ToastProps['type']>]: string[] } =
    {
      success: ['#4CAF50', '#81C784'],
      error: ['#F44336', '#E57373'],
      info: ['#2196F3', '#64B5F6'],
      warning: [Colors.goldGradient1, Colors.yellowGold],
    };

  return (
    <Animated.View
      testID="toast-container"
      style={[styles.toastContainer, { opacity }]}>
      <LinearGradient
        colors={gradientColors[type] || gradientColors.warning}
        style={styles.toast}>
        <View style={styles.toastContent}>
          <SvgImgPath.Network />
          <Text testID="toast-text" style={styles.toastText}>
            {message}
          </Text>
        </View>
        <TouchableOpacity testID="toast-close-button" onPress={onClose}>
          <SvgImgPath.CrossWhite />
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: Layout.dimensions.padding_50,
    left: Layout.dimensions.padding_20,
    right: Layout.dimensions.padding_20,
    borderRadius: Layout.dimensions.borderRadius_8,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
  },
  gradient: {
    padding: Layout.dimensions.padding_15,
    borderRadius: Layout.dimensions.borderRadius_8,
  },
  message: {
    color: Colors.white,
    fontSize: normalize(16),
  },
  toast: {
    flexDirection: 'row',
    padding: Layout.dimensions.padding_15,
    borderRadius: Layout.dimensions.borderRadius_8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toastText: {
    color: Colors.white,
    fontSize: normalize(14),
    fontFamily: FONTS.bold,
    marginLeft: Layout.dimensions.margin_10,
  },
});

export default Toast;
