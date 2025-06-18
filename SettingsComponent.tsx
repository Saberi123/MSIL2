import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Styles } from './Styles';
import { SvgImgPath } from '../../assets/images';
import Divider from '../../components/Common/Divider';
import { Layout } from '../../assets/theme/Layout';
import { useNavigation } from '@react-navigation/native';
const SettingsComponent = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View style={{ marginTop: Layout.dimensions.margin_20 }}>
        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <SvgImgPath.settings
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="SvgImgPath.settings"
              />
            </View>
            <Text style={Styles.settingText}>Settings</Text>
          </View>
          <TouchableOpacity
            testID="setting-button"
            onPress={() => navigation.navigate('SettingScreen')}>
            <SvgImgPath.fwdIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <SvgImgPath.help
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="SvgImgPath.help"
              />
            </View>
            <Text style={Styles.settingText}>Help & Support</Text>
          </View>
          <TouchableOpacity
            testID="navigate-button"
            onPress={() => navigation.navigate('HELP_AND_SCREEN')}>
            <SvgImgPath.fwdIcon
              width={20}
              height={20}
              testID="SvgImgPath.fwdIcon"
            />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <SvgImgPath.logOut
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="SvgImgPath.logOut"
              />
            </View>
            <Text style={Styles.settingText}>Signout</Text>
          </View>
          <SvgImgPath.fwdIcon width={20} height={20} />
        </View>
        <View style={Styles.privacyView}>
          <Text style={Styles.termText}>Terms & Conditions</Text>
          <Text style={Styles.seperatorText}>|</Text>
          <Text style={Styles.privacyText}>Privacy Policy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsComponent;
