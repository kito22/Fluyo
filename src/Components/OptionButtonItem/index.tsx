import React from 'react';
import { OptionItem, OptionButton, OptionText } from './styles';

interface OptionButtonItemProps {
  text: string;
  selectOption: (text: string) => void;
  isLeftSide?: boolean;
  isSelected: boolean;
}

export function OptionButtonItem({
  selectOption,
  text,
  isLeftSide,
  isSelected,
}: OptionButtonItemProps) {
  return (
    <OptionItem isLeftSide={isLeftSide}>
      <OptionButton
        activeOpacity={isSelected ? 1 : 0.2}
        isSelected={isSelected}
        onPress={() => selectOption(text)}>
        <OptionText isSelected={isSelected}>{text}</OptionText>
      </OptionButton>
    </OptionItem>
  );
}
