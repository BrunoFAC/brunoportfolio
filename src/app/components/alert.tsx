import { useCommonStore } from '@/store';
import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, device } from '@/utils';
import { TextButton } from '@/styles';

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
`;

const AlertBackground = styled.div`
	display: flex;
	position: fixed;
	z-index: 4;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: end;
`;

const AlertWrapper = styled.div<{ $isOut: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	user-select: none;
	backdrop-filter: blur(6px);
	background-color: ${colors.secondary};
	border: 1px solid ${colors.primary};
	color: ${colors.white};
	padding: 12px 20px;
	margin: 0px 16px 100px;
	width: 100%;
	max-width: 400px;
	border-radius: 8px;
	animation: ${({ $isOut }) => ($isOut ? slideOut : slideIn)} 0.3s ease-out;
	transition: opacity 0.3s ease-out;
	position: relative;
`;

const AlertIcon = styled.span`
	color: ${colors.secondary};
	background: ${colors.gray.light};
	border-radius: 100%;
	&::before {
		content: '✔';
	}
	padding: 6px 10px;
	@media ${device.tabletM} {
		font-size: 16px;
	}

	@media ${device.mobileM} {
		font-size: 12px;
	}

	@media ${device.laptop} {
		font-size: 14px;
	}

	@media ${device.desktop} {
		font-size: 20px;
		padding: 6px 12px;
	}
`;

export const Alert: FC = () => {
	const [isOut, setIsOut] = useState<boolean>(false);
	const toast = useCommonStore((store) => store.toast);
	const setToast = useCommonStore((store) => store.setToast);

	const handleClose = () => {
		setIsOut(true);
		setTimeout(() => {
			setToast('hidden');
		}, 300);
	};

	useEffect(() => {
		if (toast === 'visible') {
			setIsOut(false);
			setTimeout(handleClose, 250000);
		}
	}, [toast]);

	return (
		<>
			{toast === 'visible' && (
				<AlertBackground>
					<AlertWrapper $isOut={isOut}>
						<AlertIcon />
						<TextButton isButton color={colors.white}>
							{'E-mail copied to clipboard!'}
						</TextButton>
					</AlertWrapper>
				</AlertBackground>
			)}
		</>
	);
};
