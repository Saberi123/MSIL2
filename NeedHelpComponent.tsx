import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import ChangePhone from '../../assets/images/changePhone.svg';
import FwdIcon from '../../assets/images/fwdIcon.svg';
import Watch from '../../assets/images/watch.svg';
import Faq from '../../assets/images/faq.svg';
import ReportAnIssue from '../../assets/images/reportIssue.svg';
import { Layout } from '../../assets/theme/Layout';
import { useNavigation } from '@react-navigation/native';
import { screensName } from '../../navigation/constants';
const NeedHelpComponent = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View style={{ marginTop: Layout.dimensions.margin_20 }}>
        <Text style={Styles.needHelpText}>Need Help?</Text>
        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <Watch
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="watch"
              />
            </View>
            <Text style={Styles.settingText}>Watch & Learn</Text>
          </View>
          <FwdIcon width={20} height={20} />
        </View>

        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <Faq
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="FAQ"
              />
            </View>
            <Text style={Styles.settingText}>FAQ’s</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HELP_AND_SCREEN')}>
            <FwdIcon width={20} height={20} testID="SvgImgPath.fwdIcon" />
          </TouchableOpacity>
        </View>

        <View style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <ReportAnIssue
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="reportAnIssue"
              />
            </View>
            <Text style={Styles.settingText}>Report an Issue</Text>
          </View>
          <FwdIcon width={20} height={20} />
        </View>
        <TouchableOpacity
          testID="changeNumber"
          onPress={() => navigation.navigate(screensName.CHANGE_NUMBER)}
          style={Styles.settingsContainerView}>
          <View style={Styles.settingsViewContainer}>
            <View style={Styles.settingsIconView}>
              <ChangePhone
                width={Layout.dimensions.size(27)}
                height={Layout.dimensions.size(27)}
                testID="Change_number"
              />
            </View>
            <Text style={Styles.settingText}>Change number</Text>
          </View>
          <FwdIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NeedHelpComponent;
