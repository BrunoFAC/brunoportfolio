import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Text = styled.p<{
  $isSelected?: boolean;
  $color?: string;
  $isButton?: boolean;
}>`
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ $isSelected, $color }) => {
    if ($color) return $color;
    return $isSelected ? colors.white : colors.button.hovered;
  }};

  @media (max-width: 1023px) {
    letter-spacing: 0.5px;
    font-size: ${({ $isButton }) => ($isButton ? 16 : 12)}px;
  }

  @media (max-width: 540px) {
    font-size: ${({ $isButton }) => ($isButton ? 12 : 11)}px;
  }

  @media (min-width: 1024px) {
    letter-spacing: 0.5px;
    font-size: ${({ $isButton }) => ($isButton ? 14 : 12)}px;
  }

  @media (min-width: 1280px) {
    font-size: ${({ $isButton }) => ($isButton ? 16 : 12)}px;
  }
`;

interface TextButtonProps {
  children: ReactNode;
  isSelected?: boolean;
  isButton?: boolean;
  color?: string;
}

export const TextButton: FC<TextButtonProps> = ({
  isSelected,
  color,
  children,
  isButton,
}) => {
  return (
    <Text $color={color} $isButton={isButton} $isSelected={isSelected}>
      {children}
    </Text>
  );
};
