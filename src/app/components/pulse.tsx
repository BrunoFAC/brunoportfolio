import { colors } from '@/utils';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  100% {
    box-shadow: 0 0 0 6px transparent;
  }
`;

const Pulsing = styled.div<{ $width: number; $isPulsing?: boolean; $pulseColor?: keyof typeof colors }>`
	width: ${({ $width }) => `${$width}px`};
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${({ $pulseColor }) => $pulseColor ?? colors.primary};
	margin: 8px 0;
	box-shadow: 0 0 0 0 ${({ $pulseColor }) => $pulseColor ?? colors.primary};
	animation: ${({ $isPulsing }) => ($isPulsing ? pulseAnimation : '')} 1s infinite;
`;
export interface PulseProps {
	width: number;
	isPulsing?: boolean;
	pulseColor?: keyof typeof colors;
}
export const Pulse: FC<PulseProps> = ({ width, pulseColor, isPulsing = true }) => {
	return <Pulsing $width={width} $pulseColor={pulseColor} $isPulsing={isPulsing} />;
};
