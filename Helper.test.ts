// __tests__/Helper.test.ts
import {
  EmergencyMobileNumber,
  TEXT,
  handleLinkPress,
  LINK,
} from '../constants/Helper'; // Adjust the import path as necessary

describe('Helper constants and functions', () => {
  it('EmergencyMobileNumber should be defined correctly', () => {
    expect(EmergencyMobileNumber).toBe('18001212025');
  });

  it('TEXT should be defined correctly', () => {
    expect(TEXT).toBe(
      'By continuing, you agree to the Terms &      Conditions and the Privacy Policy'
    );
  });

  it('handleLinkPress should log the correct message', () => {
    console.log = jest.fn();
    handleLinkPress('Terms');
    expect(console.log).toHaveBeenCalledWith('Terms pressed!');
  });

  it('LINK array should be defined correctly', () => {
    expect(LINK).toEqual([
      {
        word: 'Terms',
        onPress: expect.any(Function),
      },
      {
        word: '&',
        onPress: expect.any(Function),
      },
      {
        word: '     Conditions',
        onPress: expect.any(Function),
      },
      {
        word: 'Privacy Policy',
        onPress: expect.any(Function),
      },
    ]);
  });

  it('LINK array onPress functions should call handleLinkPress with correct arguments', () => {
    console.log = jest.fn();
    LINK[0].onPress();
    expect(console.log).toHaveBeenCalledWith('Terms pressed!');
    LINK[1].onPress();
    expect(console.log).toHaveBeenCalledWith('& pressed!');
    LINK[2].onPress();
    expect(console.log).toHaveBeenCalledWith('      Conditions pressed!');
    LINK[3].onPress();
    expect(console.log).toHaveBeenCalledWith('Privacy Policy pressed!');
  });
});
