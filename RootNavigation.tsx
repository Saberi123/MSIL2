import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screensName } from './constants';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';
import OngoingJobTowingScreen from '../screens/OngoingJobTowingScreen/OngoingJobTowingScreen';
import RSAFilterScreen from '../screens/RSAFilterScreen/RSAFilterScreen';
import CaseDetail from '../screens/CaseDetail/CaseDetail';
import PickAndDropScreen from '../screens/PickAndDropScreen/PickAndDropScreen';
import MyProfileScreen from '../screens/MyProfile/MyProfileScreen';
import HelpAndSupportScreen from '../screens/HelpAndSupport/HelpAndSupportScreen';
import SettingScreen from '../screens/Settings/SettingsScreen';
import WriteUs from '../screens/writeUs/WriteUs';
import ChangeNumber from '../screens/changeNumber/ChangeNumber';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screensName.splashScreen}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screensName.LOGIN} component={LoginScreen} />
        <Stack.Screen name={screensName.HOME} component={BottomTabNavigation} />
        <Stack.Screen
          name={screensName.OngoingJobTowing}
          component={OngoingJobTowingScreen}
        />
        <Stack.Screen name="RSAFilterScreen" component={RSAFilterScreen} />
        <Stack.Screen name={screensName.CaseDetail} component={CaseDetail} />
        <Stack.Screen
          name={screensName.PICK_AND_DROP_SCREEN}
          component={PickAndDropScreen}
        />
        <Stack.Screen
          name={screensName.MY_PROFILE_SCREEN}
          component={MyProfileScreen}
        />
        <Stack.Screen name={screensName.WRITE_US_SCREEN} component={WriteUs} />
        <Stack.Screen
          name={screensName.HELP_AND_SCREEN}
          component={HelpAndSupportScreen}
        />
        <Stack.Screen name={screensName.SETTING} component={SettingScreen} />
        <Stack.Screen
          name={screensName.CHANGE_NUMBER}
          component={ChangeNumber}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
