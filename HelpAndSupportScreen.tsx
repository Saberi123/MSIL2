import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { SvgImgPath } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../../components/Common/GradientBackground';
import { Layout } from '../../assets/theme/Layout';
import HeaderComponent from '../components/HeaderComponent';
import NeedHelpComponent from './NeedHelpComponent';
import { Styles } from './Styles';
import ReachOutComponent from './ReachOutComponent';
import OpenDialer from '../../components/OpenDialer';
import { EmergencyMobileNumber } from '../../constants/Helper';

const HelpAndSupportScreen = () => {
  const navigation = useNavigation<any>();

  const onPressRightIcon = () => {
    console.log('Right icon pressed!');
    OpenDialer(EmergencyMobileNumber);
  };

  return (
    <GradientBackground>
      <SafeAreaView>
        <View>
          <HeaderComponent
            headerText="Help & Support"
            onPressLeftIcon={() => navigation.goBack()}
            onPressRightIcon={onPressRightIcon}
          />
        </View>
        <ScrollView>
          <View style={Styles.containerView}>
            <NeedHelpComponent />
            <ReachOutComponent />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HelpAndSupportScreen;
