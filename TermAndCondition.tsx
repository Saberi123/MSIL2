import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { normalize } from '../assets/theme/Typography';
import Colors from '../assets/theme/color';
import FONTS from '../assets/theme/font';

interface LinkTextProps {
  text: string;
  links: { word: string; onPress: () => void }[]; // Array of words and their corresponding actions
}

const TermAndCondition: React.FC<LinkTextProps> = ({ text, links }) => {
  const splitText = text.split(
    new RegExp(`(${links.map(link => link.word).join('|')})`, 'gi')
  );
  return (
    <View style={styles.container}>
      {splitText.map((part, index) => {
        const link = links.find(
          link => link.word.toLowerCase() === part.toLowerCase()
        );

        return link ? (
          <TouchableNativeFeedback key={index} onPress={link.onPress}>
            <Text style={styles.link}>{part}</Text>
          </TouchableNativeFeedback>
        ) : (
          <Text key={index} style={styles.text}>
            {part}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Ensure items are in a single line
    flexWrap: 'wrap', // Prevent wrapping
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(14),
    fontFamily: FONTS.regular,
    fontWeight: '400',
    color: Colors.black,

    justifyContent: 'center',
  },
  link: {
    fontSize: normalize(14),
    fontFamily: FONTS.regular,
    fontWeight: '400',
    color: Colors.blue,
  },
});

export default TermAndCondition;
