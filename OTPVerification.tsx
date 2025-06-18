import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, TextInput, Text, ViewProps } from 'react-native';
import { styles } from './styles';
import I18next from '../../Localization/i18n';
import Colors from '../../assets/theme/color';

interface OTPVerificationProps extends ViewProps {
    mobileNo: number;
    allOTPEnterd: (value: boolean) => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ mobileNo, allOTPEnterd }) => {
    const inputRefs = useRef<any[]>([]);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);

    // Handle OTP input change
    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace') {
            if (otp[index]) {
                let newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const resendCode = () => {
        if (!isTimerActive) {
            setOtp(['', '', '', '', '', '']);
            setTimer(60);
            setIsTimerActive(true);
            inputRefs.current[0].focus();
        }
    };

    // Countdown timer
    useEffect(() => {
        let interval: any;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setIsTimerActive(false);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    // Set All OTP Entered value
    useEffect(() => {
        allOTPEnterd(otp.every(x => x !== ''));
    }, [otp, allOTPEnterd]);

    return (
        <View testID='otp_input'>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{I18next.t('Login.OTP_Verification')}</Text>
                <View style={styles.mobileContainer}>
                    <Text style={styles.title3}>{I18next.t('Login.Enter_Number')}</Text>
                    <Text style={[styles.title3, styles.mobileNo]}> +91 {mobileNo}</Text>
                </View>
                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <TextInput
                            testID={`otp-input-${index}`}
                            key={index}
                            style={styles.otpInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={value}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            accessibilityLabel={`OTP input ${index + 1}`}
                        />
                    ))}
                </View>
                <View style={styles.resendCodeContainer}>
                    <View style={styles.resendCodeView}>
                        <Text style={styles.notGetOtp}>{I18next.t('Login.Not_get_otp')}</Text>
                        <TouchableOpacity
                            testID="resend-button"
                            disabled={timer > 0}
                            onPress={resendCode}
                        >
                            <Text style={[styles.notGetOtp, { color: timer > 0 ? Colors.disabledColor : Colors.blue }]}>
                                {' '}{I18next.t('Login.Resend_code')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {timer > 0 && (
                        <Text style={styles.timer} testID="timer-text">
                            {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};

export default OTPVerification;
