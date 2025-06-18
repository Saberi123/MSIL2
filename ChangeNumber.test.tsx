import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ChangeNumber from './ChangeNumber'; // Adjust the import path accordingly
import { useNavigation } from '@react-navigation/native';
import I18next from 'i18next';

// Mock navigation hook from react-navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock i18next translation function
jest.mock('i18next', () => ({
  t: jest.fn((key: string) => key), // Simply return the key for now
}));

describe('<ChangeNumber />', () => {
  let mockGoBack: jest.Mock;
  let setErrorsMock: jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    setErrorsMock = jest.fn();
    mockGoBack = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({
      goBack: mockGoBack,
    });
  });

  it('should render the ChangeNumber component correctly', () => {
    const { getByTestId } = render(<ChangeNumber />);

    // Ensure that the component renders the necessary elements
    expect(getByTestId('new-mobile-input')).toBeTruthy();
    expect(getByTestId('confirm-number-input')).toBeTruthy();
    expect(getByTestId('description-input')).toBeTruthy();
    expect(getByTestId('submit-btn')).toBeTruthy();
  });

  it('should display an error when phone numbers do not match', async () => {
    const { getByTestId, getByText } = render(<ChangeNumber />);

    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');

    // Simulate entering a new phone number
    fireEvent.changeText(newPhoneInput, '9876543210');
    fireEvent.changeText(confirmPhoneInput, '9876543211'); // Mismatched phone number

    // Wait for the error message
    await waitFor(() => {
      expect(
        getByText('New mobile number and confirmation do not match.')
      ).toBeTruthy();
    });
  });

  it('should enable submit button when form is valid', async () => {
    const { getByTestId, getByText } = render(<ChangeNumber />);

    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const descriptionInput = getByTestId('description-input');
    const submitButton = getByTestId('submit-btn');

    // Initially, the submit button should be disabled
    expect(submitButton).toBeDisabled();

    // Fill in the form with valid data
    fireEvent.changeText(newPhoneInput, '9876543210');
    fireEvent.changeText(confirmPhoneInput, '9876543210'); // Matching phone numbers
    fireEvent.changeText(descriptionInput, 'Changing number for recovery');

    // Now, the submit button should be enabled
    expect(submitButton).toBeEnabled();
  });

  it('should call handleSubmit when the submit button is clicked', async () => {
    const { getByTestId } = render(<ChangeNumber />);

    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const descriptionInput = getByTestId('description-input');
    const submitButton = getByTestId('submit-btn');

    // Fill in valid data
    fireEvent.changeText(newPhoneInput, '9876543210');
    fireEvent.changeText(confirmPhoneInput, '9876543210'); // Matching phone numbers
    fireEvent.changeText(descriptionInput, 'Changing number for recovery');

    // Simulate a press on the submit button
    fireEvent.press(submitButton);

    // Verify that the goBack function is called after submission
    await waitFor(() => expect(mockGoBack).toHaveBeenCalled());
  });

  it('should show an error when the description is empty', async () => {
    const { getByTestId, getByText } = render(<ChangeNumber />);

    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const descriptionInput = getByTestId('description-input');
    const submitButton = getByTestId('submit-btn');

    // Fill in the form but leave the description empty
    fireEvent.changeText(newPhoneInput, '9876543210');
    fireEvent.changeText(confirmPhoneInput, '9876543210');
    fireEvent.changeText(descriptionInput, ''); // Empty description
    // The submit button should be disabled due to the empty description
    expect(submitButton).toBeDisabled();
  });

  it('should show an error when new phone number is not valid', async () => {
    const { getByTestId, getByText } = render(<ChangeNumber />);

    const newPhoneInput = getByTestId('new-mobile-input');
    //const confirmPhoneInput = getByTestId('confirm-number-input');

    // Simulate entering an invalid phone number
    fireEvent.changeText(newPhoneInput, '123'); // Invalid phone number

    // There should be an error for the new phone input
    await waitFor(() =>
      expect(getByText('Please enter a valid mobile number.')).toBeTruthy()
    );
  });

  it('should show an error when new phone number is not valid', async () => {
    const { getByTestId, getByText } = render(<ChangeNumber />);

    const confirmPhoneInput = getByTestId('confirm-number-input');

    // Simulate entering an invalid phone number
    fireEvent.changeText(confirmPhoneInput, '123'); // Invalid phone number

    // There should be an error for the new phone input
    await waitFor(() =>
      expect(
        getByText('New mobile number and confirmation do not match.')
      ).toBeTruthy()
    );
  });

  it('should call navigation.goBack() when the left icon is pressed', () => {
    const { getByTestId } = render(<ChangeNumber />);

    // Find the left icon button by its testID (assuming the HeaderComponent has a testID for the left icon)
    const leftIconButton = getByTestId('driver_header_left_botton'); // Adjust the testID based on your actual HeaderComponent

    // Simulate a press on the left icon button
    fireEvent.press(leftIconButton);

    // Verify that the navigation.goBack() method was called
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should validate form successfully when new phone and confirm phone match', async () => {
    const { getByTestId } = render(<ChangeNumber />);

    // Get input fields by testID
    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const submitButton = getByTestId('submit-btn');
    const descriptionInput = getByTestId('description-input');

    // Simulate typing matching phone numbers
    fireEvent.changeText(newPhoneInput, '1234567890');
    fireEvent.changeText(confirmPhoneInput, '1234567890');
    fireEvent.changeText(descriptionInput, 'hello');

    // Simulate a press on the submit button
    fireEvent.press(submitButton);

    // Wait for the validation to complete and check for errors
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it('should not show error when newPhone and confirmPhone match', async () => {
    const { getByTestId, queryByText } = render(<ChangeNumber />);

    // Get input fields by testID
    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const submitButton = getByTestId('submit-btn');

    // Simulate typing matching phone numbers
    fireEvent.changeText(newPhoneInput, '1234567890');
    fireEvent.changeText(confirmPhoneInput, '1234567890');

    // Simulate pressing the submit button
    fireEvent.press(submitButton);

    // Wait for validation to complete
    await waitFor(() => {
      // Expect no error for confirmPhone
      expect(queryByText('ChangeNumber.Number_not_matched')).toBeNull(); // No error should be shown
    });
  });

  it('should show error when newPhone and confirmPhone do not match', async () => {
    const { getByTestId, queryByText } = render(<ChangeNumber />);

    // Get input fields by testID
    const newPhoneInput = getByTestId('new-mobile-input');
    const confirmPhoneInput = getByTestId('confirm-number-input');
    const submitButton = getByTestId('submit-btn');

    // Simulate typing non-matching phone numbers
    fireEvent.changeText(newPhoneInput, '1234567890');
    fireEvent.changeText(confirmPhoneInput, '0987654321');

    // Simulate pressing the submit button
    fireEvent.press(submitButton);

    // Wait for validation to complete
    await waitFor(() => {
      // Expect the error for confirmPhone to be shown
      expect(
        queryByText('New mobile number and confirmation do not match.')
      ).toBeTruthy(); // Error should be shown
    });
  });
});
