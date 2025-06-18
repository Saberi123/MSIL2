import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Colors from '../../assets/theme/color';
import { SvgImgPath } from '../../assets/images';
import { normalize } from '../../assets/theme/Typography';

interface DropdownProps {
  label: string;
  options: string[];
  style?: ViewStyle;
  onSelect: (option: string) => void;
  testID?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  style,
  onSelect,
  testID,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsExpanded(false);
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      {/* Dropdown Button */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.selectedText}>{selectedOption || label}</Text>
        <SvgImgPath.ChevronDown width={normalize(24)} height={normalize(24)} />
      </TouchableOpacity>

      {/* Dropdown Options */}
      {isExpanded && (
        <View style={styles.optionsContainer}>
          {options?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(item)}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(12),
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white70,
  },
  selectedText: {
    fontSize: normalize(16),
    color: Colors.black,
  },
  optionsContainer: {
    marginTop: normalize(5), // Adds spacing between dropdown and options
    backgroundColor: Colors.white,
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    borderColor: Colors.borderColor,
    paddingVertical: normalize(5),
    elevation: 3,
  },
  option: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(12),
  },
  optionText: {
    fontSize: normalize(16),
    color: Colors.black,
  },
});
