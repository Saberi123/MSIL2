import { screensName } from './constants'; // Adjust the import path as necessary

describe('screensName enum', () => {
  it('should have splashScreen defined correctly', () => {
    expect(screensName.splashScreen).toBe('splashScreen');
  });

  it('should have LOGIN defined correctly', () => {
    expect(screensName.LOGIN).toBe('LoginScreen');
  });

  it('should have HOME defined correctly', () => {
    expect(screensName.HOME).toBe('HomeScreen');
  });

  it('should have OngoingJobTowing defined correctly', () => {
    expect(screensName.OngoingJobTowing).toBe('OngoingJobTowingScreen');
  });

  it('should have all enum keys defined correctly', () => {
    expect(Object.keys(screensName)).toEqual([
      'splashScreen',
      'LOGIN',
      'HOME',
      'OngoingJobTowing',
      'CaseDetail',
      'PICK_AND_DROP_SCREEN',
      'MY_PROFILE_SCREEN',
      'HELP_AND_SCREEN',
      'SETTING',
      'WRITE_US_SCREEN',
      'CHANGE_NUMBER',
    ]);
  });

  it('should have all enum values defined correctly', () => {
    expect(Object.values(screensName)).toEqual([
      'splashScreen',
      'LoginScreen',
      'HomeScreen',
      'OngoingJobTowingScreen',
      'CaseDetail',
      'PICK_AND_DROP_SCREEN',
      'MY_PROFILE_SCREEN',
      'HELP_AND_SCREEN',
      'SettingScreen',
      'WriteUs',
      'ChangeNumber',
    ]);
  });
});
