import { Alert, Linking } from 'react-native';

const OpenDialer = (phoneNumber: string) => {
  // Check if the phone number is valid and format it
  const url = `tel:${phoneNumber}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Unable to open dialer');
      }
    })
    .catch(err => {
      Alert.alert('Error', 'An error occurred: ' + err.message);
    });
};

export default OpenDialer;
