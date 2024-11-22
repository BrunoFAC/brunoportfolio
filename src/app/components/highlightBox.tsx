import { colors } from "@/utils";
import { TextButton } from "@/styles";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ $padding?: number; $bgColor?: string }>`
  display: flex;
  justify-content: start;
  flex-direction: row;
  height: min-content;
  align-items: center;
  cursor: default;
  padding: ${({ $padding }) => `${$padding ?? 8}px`};
  border-radius: 8px;
  gap: 8px;
  background: ${({ $bgColor }) => $bgColor ?? colors.gray.dark};
  color: ${colors.gray.light};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${colors.white};
    transform: scale(1.05);
    filter: brightness(1.15);
    transform: rotate(-2deg);
  }
`;

const InfoIcon = styled.img<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => `${$width ?? 18}px`};
  height: ${({ $height }) => `${$height ?? 18}px`};
`;
export interface HighlightBoxProps {
  text: string;
  icon: string;
  iconSize?: { width: number; height: number };
  padding?: number;
}
export const HighlightBox: FC<HighlightBoxProps> = ({
  icon,
  iconSize,
  padding,
  text,
}) => {
  return (
    <Container $padding={padding}>
      <InfoIcon
        $height={iconSize?.height}
        $width={iconSize?.width}
        src={icon}
        alt={text}
      />
      <TextButton color={colors.gray.light}>{text}</TextButton>
    </Container>
  );
};
