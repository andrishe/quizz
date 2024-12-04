import { StyleSheet, Text, Pressable, View } from 'react-native';
import { CustomButtonProps } from '../types';

export default function CustomButton({
  title,
  rightIcon,
  ...pressableProps
}: CustomButtonProps) {
  return (
    <Pressable {...pressableProps} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
});
