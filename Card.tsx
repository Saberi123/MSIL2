import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  style?: any;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ style, children }) => {
  return <View style={style || stylesDefault.card}>{children}</View>;
};

const stylesDefault = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
  },
});

export default Card;
