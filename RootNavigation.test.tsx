// __tests__/RootNavigation.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import RootNavigation from './RootNavigation'; // Adjust the import path as necessary

jest.mock('../screens/loginScreen/LoginScreen', () => 'LoginScreen'); // Mock the LoginScreen component
jest.mock(
  '../screens/OngoingJobTowingScreen/OngoingJobTowingScreen',
  () => 'OngoingJobTowingScreen'
);
jest.mock('../screens/CaseDetail/CaseDetail', () => 'CaseDetail');
jest.mock(
  '../screens/PickAndDropScreen/PickAndDropScreen',
  () => 'PickAndDropScreen'
);
jest.mock('../screens/MyProfile/MyProfileScreen', () => 'MyProfileScreen');
jest.mock(
  '../screens/HelpAndSupport/HelpAndSupportScreen',
  () => 'HelpAndSupportScreen'
);
jest.mock('../screens/Settings/SettingsScreen', () => 'SettingScreen');
jest.mock('./BottomTabNavigation', () => 'BottomTabNavigation');

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: jest.fn(),
    GestureHandlerButton: jest.fn(),
  };
});
jest.mock('react-native-modal', () => {
  return {
    Modal: jest.fn().mockImplementation(({ children }) => children),
  };
});
jest.mock('react-native-localize', () => ({
  getTimeZone: jest.fn().mockReturnValue('GMT'),
  // Mock any other methods you use from react-native-localize
}));

describe('RootNavigation', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<RootNavigation />);
    expect(toJSON()).toMatchSnapshot();
  });

  // it('contains the expected screens', () => {
  //   const { getByText } = render(<RootNavigation />);

  //   expect(getByText('LoginScreen')).toBeTruthy();
  //   expect(getByText('BottomTabNavigation')).toBeTruthy();
  //   expect(getByText('OngoingJobTowingScreen')).toBeTruthy();
  //   expect(getByText('CaseDetail')).toBeTruthy();
  //   expect(getByText('PickAndDropScreen')).toBeTruthy();
  //   expect(getByText('MyProfileScreen')).toBeTruthy();
  //   expect(getByText('HelpAndSupportScreen')).toBeTruthy();
  //   expect(getByText('SettingScreen')).toBeTruthy();
  // });
});
