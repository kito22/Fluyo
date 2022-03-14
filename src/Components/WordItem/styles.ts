import styled, { css } from 'styled-components/native';
import { hp, wp } from '../../utils/calculatedSize';

export const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Tooltip = styled.View`
  background: ${({ theme }) => theme.palette.secondaryButtonBackground};
  position: absolute;
  top: ${hp(-48)}px;
  padding: ${hp(8)}px ${wp(12)}px;
  border-radius: ${wp(8)}px;
  width: ${wp(100)}px;
  left: ${wp(-30)}px;

  display: flex;
  align-items: center;
`;

export const TooltipText = styled.Text`
  font-size: ${hp(16)}px;
`;

export const QuestionTranslatedWordButton = styled.TouchableWithoutFeedback``;

export const QuestionTranslatedWord = styled.Text`
  font-size: ${hp(16)}px;
  color: ${({ theme }) => theme.palette.fontPrimary};
  margin-right: ${wp(16)}px;
  margin-bottom: 4px;
  padding: 4px 0;
`;

interface FilledWordProps {
  isFinalAnswer: boolean;
}

interface FillContainerProps extends FilledWordProps {
  hasAnswer: boolean;
  success: boolean;
}

export const FillContainer = styled.View<FillContainerProps>`
  width: ${wp(80)}px;
  align-items: center;
  margin-right: 0;
  justify-content: flex-end;
  flex: 1;

  ${({ hasAnswer, isFinalAnswer, success }) =>
    hasAnswer &&
    css`
      width: auto;
      margin-right: ${wp(16)}px;
      justify-content: flex-start;
      background-color: ${({ theme }) => {
        if (isFinalAnswer && success) {
          return theme.palette.success;
        } else if (isFinalAnswer && !success) {
          return theme.palette.error;
        } else {
          return theme.palette.secondaryButtonBackground;
        }
      }};
      padding: ${hp(6)}px ${wp(20)}px;
      border-radius: ${wp(12)}px;
    `}
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.secondaryButtonBackground};
  width: 100%;
  margin-right: ${wp(16)}px;
  margin-bottom: ${hp(8)}px;
`;

export const SelectedWord = styled.Text<FilledWordProps>`
  font-size: ${hp(16)}px;
  font-weight: bold;
  color: ${({ theme, isFinalAnswer }) =>
    isFinalAnswer ? theme.palette.fontPrimary : theme.palette.fontSecondary};
`;
