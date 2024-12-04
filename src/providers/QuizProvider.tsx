import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { QuestionCardProps } from '../types';
import questions from '../questions';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QuizContext = {
  question?: QuestionCardProps['question'];
  questionIndex: number;
  onNext?: () => void;
  selectedOption?: string;
  setSelectedOption?: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};

export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    // check if three is a new best score

    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished, score, bestScore]);

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
  };
  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }

    // check if answer is correct
    if (selectedOption === question.correctAnswer) {
      setScore((curScore) => curScore + 1);
    }

    setQuestionIndex((currValue) => currValue + 1);
  };

  const saveBestScore = async (value: number) => {
    try {
      console.log('saving best score: ', value);
      await AsyncStorage.setItem('bestScore', value.toString());
    } catch (error) {
      // Error saving data
    }
  };

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem('best-score');
      if (value !== null) {
        setBestScore(Number.parseInt(value));
      }
    } catch (e) {
      console.log('Failed to load best score');
    }
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
