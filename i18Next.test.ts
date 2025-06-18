import I18next, { reloadLanguageInstance, strings } from '../Localization/i18n';

interface Translations {
  [key: string]: string;
}

jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(),
}));

jest.mock('i18next', () => {
  const actualI18next = jest.requireActual('i18next');
  const mockI18next = {
    ...actualI18next,
    use: jest.fn().mockReturnThis(),
    init: jest.fn().mockReturnThis(),
    t: jest.fn((key: keyof Translations) => {
      const translations: Translations = {
        welcome: 'Welcome',
        // Add other translation keys and values as needed
      };
      return translations[key] || key;
    }),
    changeLanguage: jest.fn(lang => {
      mockI18next.language = lang; // Update the mock language
      return Promise.resolve(lang);
    }),
    addResourceBundle: jest.fn(),
    reloadResources: jest.fn(),
    language: 'ar',
    services: { languageDetector: { detect: jest.fn(() => 'hi') } },
    options: {
      fallbackLng: 'en',
      resources: 'resources',
    },
  };
  return mockI18next;
});

describe('i18n configuration', () => {
  it('should initialize with fallback language as English', () => {
    expect(I18next.options.fallbackLng).toBe('en');
  });

  it('should have English, Hindi, and Arabic resources', () => {
    expect(I18next.options.resources).toEqual('resources');
  });

  it('should reload language instance with given language code', () => {
    reloadLanguageInstance('ar');
    expect(I18next.language).toBe('ar');
  });

  it('should return translated strings', () => {
    const translationKey = 'welcome';
    const translationValue = 'Welcome';
    jest.spyOn(I18next, 't').mockReturnValue(translationValue);

    const result = strings(translationKey);
    expect(result).toBe(translationValue);
  });
});
