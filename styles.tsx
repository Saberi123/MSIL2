import { StyleSheet } from 'react-native';
import { normalize } from '../../assets/theme/Typography';
import FONTS from '../../assets/theme/font';
import Colors from '../../assets/theme/color';

export const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    borderTopLeftRadius: normalize(19),
    borderTopRightRadius: normalize(19),
  },
  title: {
    fontSize: normalize(20),
    marginBottom: normalize(16),
    textAlign: 'left',
    color: Colors.black,
    fontFamily: FONTS.light,
    fontWeight: "300",
  },
  title3: {
    fontSize: normalize(16),
    marginBottom: normalize(10),
    textAlign: 'left',
    color: Colors.gray,
    fontFamily: FONTS.regular,
    fontWeight: "400",
  },
  mobileContainer: {
    flexDirection: 'row'
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(20),
  },
  otpInput: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor,
    borderRadius: normalize(12),
    textAlign: 'center',
    fontSize: normalize(20),
    padding: normalize(10),
    width: normalize(46),
  },
  mobileNo: {
    fontFamily: FONTS.bold,
    color: Colors.black,
    fontWeight: "700"
  },
  notGetOtp: {
    fontSize: normalize(14),
    marginBottom: normalize(10),
    textAlign: 'left',
    color: Colors.black,
    fontFamily: FONTS.regular,
    fontWeight: "400",
  },
  resendCode: {
    fontSize: normalize(14),
    marginBottom: normalize(10),
    textAlign: 'left',
    color: Colors.black,
    fontFamily: FONTS.regular,
    fontWeight: "400",
  },
  timer: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: normalize(14),
    color: Colors.black
  },
  resendCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  resendCodeView: {
    flexDirection: 'row'
  },
});
