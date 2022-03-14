import React, { useCallback, useMemo, useState } from 'react';
import { AnswerFeedbackModal } from '../../Components/AnswerFeedbackModal';
import { OptionButtonItem } from '../../Components/OptionButtonItem';
import { WordItem } from '../../Components/WordItem';
import { questionExample } from '../../Service/DummyData';
import {
  Container,
  ActionWrapper,
  ContentWrapper,
  InstructionText,
  QuestionContainer,
  QuestionOriginalTitle,
  QuestionTranslationContainer,
  OptionsContainer,
  ContinueButton,
  ContinueButtonText,
  QuestionOriginalTitleContainer,
} from './styles';

export default function Main() {
  const [canShowTooltip, setCanShowTooltip] = useState(false);
  const [wordTooltipIndex, setWordTooltipIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [hasFinalAnswer, setHasFinalAnswer] = useState(false);

  const hideTooltip = useCallback(() => {
    if (canShowTooltip) {
      setCanShowTooltip(false);
      setWordTooltipIndex(null);
    }
  }, [canShowTooltip]);

  const showTooltip = useCallback(
    (wordIndex: number) => {
      if (canShowTooltip && wordIndex === wordTooltipIndex) {
        hideTooltip();
        return;
      }
      setWordTooltipIndex(wordIndex);
      setCanShowTooltip(true);
    },
    [canShowTooltip, hideTooltip, wordTooltipIndex],
  );

  const handleOptionPress = useCallback(
    (option: string) => () => {
      if (option === selectedOption || hasFinalAnswer) {
        return;
      }
      setSelectedOption(option);
    },
    [selectedOption, hasFinalAnswer],
  );

  const closeFeedbackModal = useCallback(() => {
    setHasFinalAnswer(false);
    setSelectedOption(undefined);
  }, []);

  const originalSentenceArray = useMemo(() => {
    return questionExample.sentence_original.split(' ');
  }, []);

  return (
    <Container>
      <ActionWrapper onPress={hideTooltip}>
        <ContentWrapper>
          <InstructionText>Fill in the missing word</InstructionText>
          <QuestionContainer>
            <QuestionOriginalTitleContainer>
              {originalSentenceArray.map(word => (
                <QuestionOriginalTitle
                  isHighlighted={
                    word === questionExample.word_to_learn_original
                  }>
                  {word}
                </QuestionOriginalTitle>
              ))}
            </QuestionOriginalTitleContainer>
            <QuestionTranslationContainer>
              {questionExample.words.map((word, index) => (
                <WordItem
                  key={word.original_word}
                  hasToShowTooltip={
                    canShowTooltip && wordTooltipIndex === index
                  }
                  showTooltip={() => showTooltip(index)}
                  originalText={word.original_word}
                  translatedText={word.translated_word}
                  hasToFill={
                    word.original_word ===
                    questionExample.word_to_learn_original
                  }
                  selectedOption={selectedOption}
                  isFinalAnswer={hasFinalAnswer}
                  isCorrect={
                    selectedOption === questionExample.word_to_learn_translated
                  }
                />
              ))}
            </QuestionTranslationContainer>
          </QuestionContainer>

          <OptionsContainer>
            {questionExample.answers.map((answer, index) => (
              <OptionButtonItem
                key={answer}
                isLeftSide={index % 2 === 0}
                text={answer}
                isSelected={selectedOption === answer}
                selectOption={handleOptionPress(answer)}
              />
            ))}
          </OptionsContainer>

          <ContinueButton
            disabled={!selectedOption}
            onPress={() => setHasFinalAnswer(true)}>
            <ContinueButtonText>Continue</ContinueButtonText>
          </ContinueButton>
        </ContentWrapper>
      </ActionWrapper>
      {hasFinalAnswer && (
        <AnswerFeedbackModal
          isCorrect={
            selectedOption === questionExample.word_to_learn_translated
          }
          correctAnswer={questionExample.word_to_learn_translated}
          closeModal={closeFeedbackModal}
        />
      )}
    </Container>
  );
}
