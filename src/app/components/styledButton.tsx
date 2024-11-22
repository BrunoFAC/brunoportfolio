import { colors, device } from '@/utils';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { TextButton } from '@/styles';

const slide = keyframes`
     0% {
      left: -200%;
    }
    100% {
      left: 100%;
    }
`;
const Button = styled.button<{ $width: string }>`
	display: flex;
	${({ $width }) => {
		if ($width === '100%') return { width: '100%' };
		return { flex: 1, flexBasis: $width };
	}};

	padding: 10px;
	align-items: center;
	border: 1px solid ${colors.card.border};
	border-radius: 8px;
	gap: 8px;
	@media ${device.mobileM} {
		gap: 4px;
	}
	justify-content: center;
	flex-direction: row;
	background: ${colors.gray.dark};
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);
	overflow: hidden;
	transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -200%;
		width: 200%;
		height: 400%;
		background: ${colors.button.bgAnimation};
		transform: rotate(-45deg);
		pointer-events: none;
		animation: ${slide} 4s ease-in-out infinite;
	}

	&:hover {
		border: 1px solid ${colors.button.hovered};
		filter: brightness(1.15);
	}
`;

const InfoIcon = styled.img`
	width: 18px;
	height: 18px;
	@media ${device.mobileM} {
		width: 13px;
		height: 13px;
	}
`;

export interface IconTextButtonProps {
	icon: string;
	text?: string;
	width: string;
	onClick: () => void;
}

export const StyledButton: FC<IconTextButtonProps> = ({ icon, text, width, onClick }) => {
	return (
		<Button onClick={onClick} $width={width}>
			<InfoIcon src={icon} alt={text} />
			{text && (
				<TextButton isButton isSelected>
					{text}
				</TextButton>
			)}
		</Button>
	);
};
