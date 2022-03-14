import styled from 'styled-components/native';
import { hp, wp } from '../../utils/calculatedSize';

interface OptionItemProps {
  isLeftSide?: boolean;
}

export const OptionItem = styled.View<OptionItemProps>`
  width: 46%;
  margin-bottom: ${hp(16)}px;
  align-items: ${({ isLeftSide }) => (isLeftSide ? 'flex-end' : 'flex-start')};
`;

interface OptionInnerProps {
  isSelected: boolean;
}

export const OptionButton = styled.TouchableOpacity<OptionInnerProps>`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.palette.primaryButtonBackground
      : theme.palette.secondaryButtonBackground};
  max-width: 100%;
  padding: ${hp(16)}px ${wp(20)}px;
  border-radius: ${wp(16)}px;
`;

export const OptionText = styled.Text<OptionInnerProps>`
  text-align: center;
  color: ${({ theme, isSelected }) =>
    isSelected ? 'transparent' : theme.palette.fontSecondary};
`;
