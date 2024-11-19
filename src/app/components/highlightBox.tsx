import { colors } from "@/global";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ $padding?: number; $bgColor?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: min-content;
  align-items: center;
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
const Text = styled.p<{ $fontSize?: number }>`
  font-size: ${({ $fontSize }) => `${$fontSize ?? 14}px`};
  cursor: default;
`;

const InfoIcon = styled.img<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => `${$width ?? 18}px`};
  height: ${({ $height }) => `${$height ?? 18}px`};
`;
export interface HighlightBoxProps {
  text: string;
  icon: string;
  fontSize?: number;
  iconSize?: { width: number; height: number };
  padding?: number;
}
export const HighlightBox: FC<HighlightBoxProps> = ({
  icon,
  fontSize,
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
      <Text $fontSize={fontSize}>{text}</Text>
    </Container>
  );
};
