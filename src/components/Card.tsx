import { StyleSheet, Text, View } from 'react-native';
import { CardProps } from '../types';
import { PropsWithChildren } from 'react';

export default function Card({
  title,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 40,
    padding: 20,
    gap: 20,

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
  },
});
