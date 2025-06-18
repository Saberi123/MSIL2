import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Import other icon libraries as needed

interface IconProps {
  iconName: string;
  iconType: string | undefined;
  size?: number;
  color?: string;
  style?: {};
}

const VectorIcon: React.FC<IconProps> = ({
  iconName,
  iconType,
  size = 24,
  color = '#000',
  style = {},
}) => {
  let IconComponent;

  switch (iconType) {
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'EvilIcons':
      IconComponent = EvilIcons;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    case 'Fontisto':
      IconComponent = Fontisto;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'Octicons':
      IconComponent = Octicons;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    // Add cases for other icon libraries
    default:
      IconComponent = FontAwesome; // Fallback or default icon library
  }

  return (
    <IconComponent testID={iconType} name={iconName} size={size} color={color} style={style} />
  );
};

const styles = StyleSheet.create({
  // Define your styles if needed
});

export default VectorIcon;
