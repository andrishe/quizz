import { Pressable, StyleSheet, Text } from 'react-native';
import { AnswerOptionProps } from '../types';
import { useQuizContext } from '../providers/QuizProvider';

export default function AnswerOption({ option }: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;
  return (
    <Pressable
      onPress={() => setSelectedOption?.(option)}
      style={[
        styles.container,
        isSelected && {
          backgroundColor: '#5ec286',
          borderColor: '#5ec286',
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    borderRadius: 100,
  },
});
