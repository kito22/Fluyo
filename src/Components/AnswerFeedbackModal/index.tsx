import React from 'react';
import {
  AnswerFeedbackContainer,
  AnswerFeedbackTitle,
  ContinueModalButton,
  ContinueModalButtonText,
} from './styles';

interface AnswerFeedbackModalProps {
  closeModal: () => void;
  isCorrect: boolean;
  correctAnswer: string;
}

export function AnswerFeedbackModal({
  closeModal,
  isCorrect,
  correctAnswer,
}: AnswerFeedbackModalProps) {
  return (
    <AnswerFeedbackContainer success={isCorrect}>
      <AnswerFeedbackTitle>
        {isCorrect ? 'Great Job' : `Answer: ${correctAnswer}`}
      </AnswerFeedbackTitle>
      <ContinueModalButton onPress={closeModal}>
        <ContinueModalButtonText success={isCorrect}>
          Continue
        </ContinueModalButtonText>
      </ContinueModalButton>
    </AnswerFeedbackContainer>
  );
}
