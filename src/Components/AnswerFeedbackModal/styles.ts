import styled from 'styled-components/native';
import { hp, wp } from '../../utils/calculatedSize';

interface AnswerFeedbackProps {
  success: boolean;
}

export const AnswerFeedbackContainer = styled.View<AnswerFeedbackProps>`
  height: 25%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme, success }) =>
    success ? theme.palette.success : theme.palette.error};
  border-top-right-radius: ${wp(32)}px;
  border-top-left-radius: ${wp(32)}px;

  padding: ${wp(28)}px;
`;

export const AnswerFeedbackTitle = styled.Text`
  color: ${({ theme }) => theme.palette.fontPrimary};

  font-size: ${hp(18)}px;
  font-weight: 700;
`;

export const ContinueModalButton = styled.TouchableOpacity`
  width: 100%;
  height: ${hp(60)}px;
  border-radius: ${hp(60)}px;
  background: ${({ theme }) => theme.palette.secondaryButtonBackground};

  align-items: center;
  justify-content: center;
  margin-top: ${hp(32)}px;
`;

export const ContinueModalButtonText = styled.Text<AnswerFeedbackProps>`
  color: ${({ theme, success }) =>
    success ? theme.palette.success : theme.palette.error};
  font-size: ${hp(18)}px;
  font-weight: bold;
`;
