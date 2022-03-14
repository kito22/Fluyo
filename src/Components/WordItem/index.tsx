import React from 'react';
import {
  Container,
  FillContainer,
  QuestionTranslatedWordButton,
  QuestionTranslatedWord,
  Tooltip,
  TooltipText,
  Line,
  SelectedWord,
} from './styles';

interface WordItemProps {
  originalText?: string;
  translatedText?: string;
  showTooltip: () => void;
  hasToShowTooltip: boolean;
  hasToFill?: boolean;
  selectedOption?: string;
  isCorrect: boolean;
  isFinalAnswer: boolean;
}

export function WordItem({
  originalText,
  translatedText,
  showTooltip,
  hasToShowTooltip,
  hasToFill,
  selectedOption,
  isCorrect,
  isFinalAnswer,
}: WordItemProps) {
  // const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Container>
      {hasToShowTooltip && !hasToFill && (
        <Tooltip>
          <TooltipText>{originalText}</TooltipText>
        </Tooltip>
      )}
      {hasToFill ? (
        <FillContainer
          success={isCorrect}
          isFinalAnswer={isFinalAnswer}
          hasAnswer={Boolean(selectedOption)}>
          {selectedOption ? (
            <SelectedWord isFinalAnswer={isFinalAnswer}>
              {selectedOption}
            </SelectedWord>
          ) : (
            <Line />
          )}
        </FillContainer>
      ) : (
        <QuestionTranslatedWordButton onPress={showTooltip}>
          <QuestionTranslatedWord>{translatedText}</QuestionTranslatedWord>
        </QuestionTranslatedWordButton>
      )}
    </Container>
  );
}
