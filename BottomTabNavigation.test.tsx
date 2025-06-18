import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BottomTabNavigation from './BottomTabNavigation';
import Colors from '../assets/theme/color';

// Mock dependencies
jest.mock('react-native-localize', () => {});
jest.mock('react-native-permissions', () => ({
  PERMISSIONS: {
    IOS: {
      CAMERA: 'ios.permission.CAMERA',
      LOCATION: 'ios.permission.LOCATION',
    },
    ANDROID: {
      CAMERA: 'android.permission.CAMERA',
      LOCATION: 'android.permission.LOCATION',
    },
  },
  check: jest.fn(),
  request: jest.fn(),
  openSettings: jest.fn(),
  checkNotifications: jest.fn().mockResolvedValue({ status: 'granted' }), // Mock checkNotifications
  RESULTS: {
    GRANTED: 'granted',
    DENIED: 'denied',
    BLOCKED: 'blocked',
    UNAVAILABLE: 'unavailable',
  }, // Mock RESULTS object
}));

// Sample Redux store for testing
const mockStore = createStore(() => ({
  history: {
    allHistory: [],
  },
  user: {
    permissions: {
      camera: true,
      location: true,
      notification: true,
    },
  },
}));

describe('BottomTabNavigation', () => {
  const renderWithNavigation = () =>
    render(
      <Provider store={mockStore}>
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      </Provider>
    );

  it('renders all tabs', () => {
    const { getByTestId } = renderWithNavigation();

    expect(getByTestId('tab-Home')).toBeTruthy();
    expect(getByTestId('tab-History')).toBeTruthy();
    expect(getByTestId('tab-Notifications')).toBeTruthy();
    expect(getByTestId('tab-Account')).toBeTruthy();
  });

  it('navigates to Home tab and updates activeTab state', () => {
    const { getByTestId } = renderWithNavigation();
    const homeTab = getByTestId('tab-Home');
    fireEvent.press(homeTab);

    const underline = getByTestId('underline-Home');
    expect(underline).toBeTruthy();
    expect(underline).toHaveStyle({ backgroundColor: Colors.blue });
  });

  it('navigates to History tab and updates activeTab state', () => {
    const { getByTestId } = renderWithNavigation();
    const historyTab = getByTestId('tab-History');
    fireEvent.press(historyTab);

    const underline = getByTestId('underline-History');
    expect(underline).toBeTruthy();
    expect(underline).toHaveStyle({ backgroundColor: Colors.blue });
  });

  it('navigates to Notifications tab and updates activeTab state', () => {
    const { getByTestId } = renderWithNavigation();
    const notificationTab = getByTestId('tab-Notifications');
    fireEvent.press(notificationTab);

    const underline = getByTestId('underline-Notifications');
    expect(underline).toBeTruthy();
    expect(underline).toHaveStyle({ backgroundColor: Colors.blue });
  });

  it('navigates to Account tab and updates activeTab state', () => {
    const { getByTestId } = renderWithNavigation();
    const accountTab = getByTestId('tab-Account');
    fireEvent.press(accountTab);

    const underline = getByTestId('underline-Account');
    expect(underline).toBeTruthy();
    expect(underline).toHaveStyle({ backgroundColor: Colors.blue });
  });

  it('navigates to Home tab and removes underline from other tabs', () => {
    const { getByTestId } = renderWithNavigation();
    const homeTab = getByTestId('tab-Home');
    const historyTab = getByTestId('tab-History');

    // Initially press History tab and check underline
    fireEvent.press(historyTab);
    expect(getByTestId('underline-History')).toHaveStyle({
      backgroundColor: Colors.blue,
    });

    // Press Home tab and check its underline
    fireEvent.press(homeTab);
    const underlineHome = getByTestId('underline-Home');
    expect(underlineHome).toBeTruthy();
    expect(underlineHome).toHaveStyle({ backgroundColor: Colors.blue });

    // Check that History tab underline is removed
    expect(getByTestId('underline-History')).toHaveStyle({
      backgroundColor: Colors.transparent,
    });
  });
});