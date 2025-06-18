import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import GradientBackground from '../../components/Common/GradientBackground';
import HeaderComponent from '../components/HeaderComponent';
import { Styles } from './Styles';
import UserProfileComponent from './UserProfileComponent';
import SettingsComponent from './SettingsComponent';
import { Layout } from '../../assets/theme/Layout';

const AccountScreen = () => {  
  return (
    <GradientBackground>
      <KeyboardAvoidingView testID="keyboard-avoiding-view" style={{ flex: 1 }}>
        <View style={{marginBottom:Layout.dimensions.size(100)}}>
          <HeaderComponent
            headerText={'My Account'}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.containerView}>
            <UserProfileComponent/>
            <View>
              <SettingsComponent/>
            </View>
          </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default AccountScreen;
