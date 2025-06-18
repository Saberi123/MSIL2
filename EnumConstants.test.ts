// __tests__/EnumConstants.test.ts
import { Languages } from '../constants/EnumConstants'; // Adjust the import path as necessary

describe('Languages enum', () => {
  it('should have English defined correctly', () => {
    expect(Languages.English).toBe('en');
  });

  it('should have Hindi defined correctly', () => {
    expect(Languages.Hindi).toBe('hi');
  });

  it('should have Arabic defined correctly', () => {
    expect(Languages.Arabic).toBe('ar');
  });

  it('should have all enum keys defined correctly', () => {
    expect(Object.keys(Languages)).toEqual(['English', 'Hindi', 'Arabic']);
  });

  it('should have all enum values defined correctly', () => {
    expect(Object.values(Languages)).toEqual(['en', 'hi', 'ar']);
  });
});
