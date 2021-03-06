import styled from 'styled-components/native';
import { hp, wp } from '../../utils/calculatedSize';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 1px;
  background: ${({ theme }) => theme.palette.primaryBackground};
`;

export const ActionWrapper = styled.TouchableWithoutFeedback``;

export const ContentWrapper = styled.View`
  height: 80%;
  border-top-right-radius: ${wp(32)}px;
  border-top-left-radius: ${wp(32)}px;
  background: ${({ theme }) => theme.palette.primary};

  padding: ${hp(48)}px ${wp(28)}px;

  align-items: center;
`;

export const InstructionText = styled.Text`
  color: ${({ theme }) => theme.palette.fontPrimary};
  font-size: ${hp(14)}px;
`;

export const QuestionContainer = styled.View`
  margin-top: ${hp(28)}px;
  align-items: center;
`;

export const QuestionOriginalTitleContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
`;

interface QuestionOriginalTitleProps {
  isHighlighted: boolean;
}

export const QuestionOriginalTitle = styled.Text<QuestionOriginalTitleProps>`
  font-size: ${hp(24)}px;
  color: ${({ theme }) => theme.palette.fontPrimary};
  margin-right: ${wp(8)}px;
  font-weight: ${({ isHighlighted }) => (isHighlighted ? 'bold' : 'normal')};
  text-decoration: ${({ isHighlighted }) =>
    isHighlighted ? 'underline' : 'none'};
  text-decoration-color: ${({ theme }) =>
    theme.palette.primaryButtonBackground};
`;

export const QuestionTranslationContainer = styled.View`
  flex-direction: row;
  margin-top: ${hp(48)}px;
  flex-wrap: wrap;
`;

export const OptionsContainer = styled.View`
  margin-top: ${hp(32)}px;
  flex-wrap: wrap;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 0 ${wp(32)}px;

  flex: 1;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: ${hp(60)}px;
  border-radius: ${wp(50)}px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.palette.primaryButtonBackground : theme.palette.success};

  align-items: center;
  justify-content: center;
  margin-bottom: ${hp(16)}px;
`;

export const ContinueButtonText = styled.Text`
  font-size: ${hp(18)}px;
  color: ${({ theme }) => theme.palette.fontPrimary};
  font-weight: bold;
`;
