import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../screens/RSAFilterScreen/styles';

export interface OptionProps {
    optName: string;
    testID: string;
    selectedOptions: string[];
    toggleOption: (option: string) => void;
  }

const Option: React.FC<OptionProps> = ({ optName, testID, selectedOptions, toggleOption }) => {
  return (
    <TouchableOpacity
      key={testID}
      testID={testID}
      style={[styles.optionButton, selectedOptions.includes(optName) && styles.selectedOption]}
      onPress={() => toggleOption(optName)}>
      <Text style={[selectedOptions.includes(optName) && styles.selectedOptionText]}>
        {optName}
      </Text>
    </TouchableOpacity>
  );
};

export default Option;
