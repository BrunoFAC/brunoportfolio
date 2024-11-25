'use client';
import { colors } from '@/utils';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const drift = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const flash = keyframes`
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw ${colors.yellow};
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw ${colors.yellow};
  }
`;

// Random functions for animations
const random = (max: number) => Math.floor(Math.random() * max);
const randomRotationSpeed = () => random(10) + 8;
const randomFlashSpeed = () => random(6000) + 5000;
const randomFlashDelay = () => random(8000) + 500;

// Firefly component and randomized animations
const Firefly = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	width: 0.4vw;
	height: 0.4vw;
	margin: 0.2vw 0 0 9.8vw;
	animation: ${() => moveAnimation()} ease 200s alternate infinite;
	pointer-events: none;

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform-origin: -10vw;
	}

	&::before {
		background: white;
		opacity: 0.4;
		animation: ${drift} ease alternate infinite;
		animation-duration: ${() => `${randomRotationSpeed()}s`};
	}

	&::after {
		background: white;
		opacity: 0;
		box-shadow: 0 0 0vw 0vw ${colors.yellow};
		animation:
			${drift} ease alternate infinite,
			${flash} ease infinite;
		animation-duration: ${() => `${randomRotationSpeed()}s, ${randomFlashSpeed()}ms`};
		animation-delay: 0ms, ${() => `${randomFlashDelay()}ms`};
	}
`;

// Generates keyframes for each firefly movement
const moveAnimation = () => keyframes`
  ${Array.from({ length: random(12) + 16 })
		.map(
			(_, step) => `
    ${Math.floor((step / (random(12) + 16)) * 100)}% {
      transform: translateX(${random(100) - 50}vw) translateY(${random(100) - 50}vh) scale(${random(75) / 100 + 0.25});
    }
  `
		)
		.join('')}
`;
export const Background: FC = () => {
	return (
		<>
			{Array.from({ length: 15 }).map((length, index) => (
				<Firefly key={`${index}-${length}`} />
			))}
		</>
	);
};
