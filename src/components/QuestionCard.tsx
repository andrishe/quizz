import { View, Text } from 'react-native';
import AnswerOption from './AnswerOption';
import { QuestionCardProps } from '../types';
import Card from './Card';
import { useState } from 'react';

export default function QuestionCard({ question }: QuestionCardProps) {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Card title={question.title}>
        <Text
          onPress={() => setCounter((count) => count + 1)}
          style={{ fontSize: 40 }}
        >
          {' '}
          {counter}
        </Text>
        <View style={{ gap: 10 }}>
          {question.options.map((option, index) => (
            <AnswerOption key={option} option={option} />
          ))}
        </View>
      </Card>
    </View>
  );
}
