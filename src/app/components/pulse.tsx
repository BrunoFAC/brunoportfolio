import { colors } from "@/global";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  100% {
    box-shadow: 0 0 0 6px transparent;
  }
`;

const Pulsing = styled.div<{ $width: number; $isPulsing?: boolean }>`
  width: ${({ $width }) => `${$width}px`};
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${colors.primary};
  margin: 8px 0;
  box-shadow: 0 0 0 0 ${colors.primary};
  animation: ${({ $isPulsing }) => ($isPulsing ? pulseAnimation : "")} 1s
    infinite;
`;
export interface PulseProps {
  width: number;
  isPulsing?: boolean;
}
export const Pulse: FC<PulseProps> = ({ width, isPulsing = true }) => {
  return <Pulsing $width={width} $isPulsing={isPulsing} />;
};
