import React, { useState } from 'react';
import { View, SafeAreaView, Alert, Text, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../../components/Common/GradientBackground';

import HeaderComponent from '../components/HeaderComponent';
import CustomButton from '../../components/Common/CustomButton';

import I18next from 'i18next';
import { styles } from './styles';

// "ChangeNumber": "New Mobile No.*",
// "EnterNewNumber": "Confirm New Mobile No.*",
// "Reason": "Reason for change*",
// "Send": "Send Request",
// "Change": "Change",
// "Request": "Request sent successfully"

const mobileNumberRegex = /^\+91[0-9]\d{10}$/;
const ChangeNumber = () => {
  const navigation = useNavigation<any>();
  const [inputValue, setInputValue] = useState('');
  const [newPhone, setNewPhone] = useState<string>('');
  const [confirmPhone, setConfirmPhone] = useState<string>('');

  const [errors, setErrors] = useState<any>({
    newPhone: '',
    confirmPhone: '',
  });

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;
    setErrors({
      newPhone: '',
      confirmPhone: '',
    });
    if (newPhone !== confirmPhone) {
      newErrors.confirmPhone = I18next.t('ChangeNumber.Number_not_matched');
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    //TODO: add API call here
    navigation.goBack();
  };

  const handlePhoneInput = (
    text: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const newErrors: any = {};
    // Remove any non-numeric characters
    const filteredText = text.replace(/[^0-9]/g, '');
    if (newPhone.length !== 10) {
      newErrors.newPhone = 'Please enter a valid mobile number.';
      setErrors(newErrors);
    }

    setPhone(filteredText);
  };

  const handleConfirmPhoneInput = (
    text: string,
    setConfirmPhone: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const newErrors: any = {};
    const filteredText = text.replace(/[^0-9]/g, '');
    setConfirmPhone(filteredText);
    if (newPhone !== filteredText) {
      newErrors.confirmPhone =
        'New mobile number and confirmation do not match.';
      setErrors(newErrors);
    } else {
      newErrors.confirmPhone = '';
      setErrors(newErrors);
    }
  };

  const isEnable =
    newPhone.length === 10 &&
    confirmPhone.length === 10 &&
    inputValue.length !== 0;

  return (
    <GradientBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderComponent
          headerText={I18next.t('ChangeNumber.Title')}
          onPressLeftIcon={() => navigation.goBack()}
        />
        <View style={styles.mainContainer}>
          <Text testID="new-mobile" style={[styles.infoText]}>
            {I18next.t('ChangeNumber.ChangeNumber')}
          </Text>

          {/* New Mobile Number Input */}

          <View style={styles.inputContainer}>
            <Text style={styles.code}>+91</Text>
            <TextInput
              testID="new-mobile-input"
              style={[
                styles.inputNumber,
                errors.newPhone ? styles.errorInput : null,
              ]}
              placeholder="Number"
              keyboardType="numeric"
              value={newPhone}
              onChangeText={text => handlePhoneInput(text, setNewPhone)}
              maxLength={10} // Limit to 10 digits
            />
          </View>
          {errors.newPhone && (
            <Text style={styles.errorText}>{errors.newPhone}</Text>
          )}
          <Text testID="confirm-number" style={[styles.infoText]}>
            {I18next.t('ChangeNumber.EnterNewNumber')}
          </Text>
          {/* Confirm New Mobile Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.code}>+91</Text>
            <TextInput
              testID="confirm-number-input"
              style={[
                styles.inputNumber,
                errors.confirmPhone ? styles.errorInput : null,
              ]}
              placeholder="confirm Number"
              keyboardType="numeric"
              value={confirmPhone}
              onChangeText={text =>
                handleConfirmPhoneInput(text, setConfirmPhone)
              }
              maxLength={10} // Limit to 10 digits
            />
          </View>
          {errors.confirmPhone && (
            <Text style={styles.errorText}>{errors.confirmPhone}</Text>
          )}

          <TextInput
            testID="description-input"
            style={styles.input}
            multiline
            maxLength={500}
            value={inputValue}
            onChangeText={text => setInputValue(text)} // To update parent component state
            placeholder={I18next.t('WriteUs.Reason')}
          />

          <CustomButton
            disabled={!isEnable}
            style={
              isEnable
                ? styles.button
                : { ...styles.button, backgroundColor: 'grey' }
            }
            textStyle={styles.statusButtonText}
            title={'Submit'}
            onPress={handleSubmit}
            testID={`submit-btn`}
          />
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default ChangeNumber;
