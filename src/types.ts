import React from 'react';
import { ComponentProps } from 'react';
import { Pressable } from 'react-native';

export type QuestionCardProps = {
  question: {
    title: string;
    options: string[];
    correctAnswer: string;
  };
};

export type AnswerOptionProps = {
  option: string;
};

export type CardProps = {
  title: string;
};

export type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
} & ComponentProps<typeof Pressable>;
