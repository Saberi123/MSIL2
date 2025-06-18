import { StyleSheet } from 'react-native';
import { normalize } from '../../assets/theme/Typography';
import FONTS from '../../assets/theme/font';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: Layout.dimensions.margin_20,
  },

  button: {
    position: 'absolute',
    bottom: Layout.dimensions.margin_20, // Position the button 20 units from the bottom of the container
    left: Layout.dimensions.padding_16, // Align the button with the left side of the container (or center as needed)
    right: Layout.dimensions.padding_16, // Align the button with the right side of the container
    backgroundColor: Colors.blue,
    paddingVertical: Layout.dimensions.padding_12,
    paddingHorizontal: Layout.dimensions.padding_24,
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusButtonText: {
    fontFamily: FONTS.bold,
    fontSize: normalize(14),
    fontWeight: '700',
    color: Colors.white,
  },

  infoText: {
    fontFamily: FONTS.regular,
    fontSize: normalize(14),
    color: 'rgba(115, 115, 115, 1)',
    fontWeight: '400',
    marginTop: normalize(10),
  },
  input: {
    marginTop: 12,
    padding: 10,
    gap: 6,
    height: Layout.dimensions.padding_100,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: Layout.dimensions.padding_12,
    fontSize: 14,
    color: Colors.black,
    fontFamily: FONTS.regular,
    fontWeight: '400',
    backgroundColor: 'rgba(243, 249, 255, 0.7)',
    lineHeight: 20,
  },

  inputNumber: {
    height: normalize(50),
    borderColor: 'gray',
    flex: 1,
    fontSize: normalize(14),
    fontFamily: FONTS.regular,
    fontWeight: '400',
    color: Colors.black,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 249, 255, 0.7)',
    marginTop: normalize(10),
    borderColor: Colors.borderColor,
    borderWidth: normalize(1),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(12),
  },

  code: {
    marginRight: normalize(8),
    alignSelf: 'center',
    fontSize: normalize(14),
    fontFamily: FONTS.regular,
    fontWeight: '400',
    color: Colors.black,
  },

  errorInput: {
    borderColor: 'red', // Red border for input fields with errors
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
