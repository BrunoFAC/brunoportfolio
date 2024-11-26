import { colors, device } from '@/utils';
import styled from 'styled-components';

export const ContainerText = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	transition: transform 0.3s ease;
	@media ${device.mobileM} {
		flex-direction: column;
		gap: 4px;
		align-items: start;
	}
`;

export const HeadSite = styled.img<{ $isSquared?: boolean }>`
	width: 36px;
	height: 36px;
	border-radius: ${({ $isSquared }) => ($isSquared ? '4px' : '100%')};
	transition: transform 0.3s ease;

	&:hover {
		transform: rotate(-5deg);
	}
`;
export const ContainerImageSite = styled.div`
	display: flex;
	gap: 24px;
	opacity: 0.7;
	max-width: 400px;
	cursor: pointer;

	@media ${device.mobileM} {
		max-width: 90%;
	}
	@media ${device.mobileS} {
		max-width: calc(90% - 15px);
	}
	@media ${device.laptop} {
		max-width: 300px;
	}
	@media ${device.desktop} {
		max-width: 350px;
	}
	transition:
		transform 0.3s ease,
		max-width 0.3s ease,
		opacity 0.3s ease;
`;

export const ImageSite = styled.img`
	max-width: 100%;
	border-radius: 8px;
	transition: transform 0.3s ease;
`;

export const ContainerTitleLabel = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerIcons = styled.div`
	display: flex;
	gap: 24px;
	opacity: 0.7;

	transform: translateX(20px);

	@media ${device.mobileM} {
		transform: translateX(15px);
	}
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	padding: 8px;

	@media ${device.mobileM} {
		width: 28px;
		height: 28px;
	}

	&:hover {
		background: ${colors.button.hovered};
		transform: rotate(-10deg);
		opacity: 1;
	}
`;

export const ContainerTechs = styled.div`
	display: flex;
	flex-flow: wrap;
	align-items: center;
	color: ${colors.white};
	margin-top: 2px;
	max-width: 600px;
	opacity: 0.7;
	flex: 1;
	gap: 8px;
	transform: translateX(20px);

	@media ${device.mobileM} {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(2, 1fr);
		align-items: start;
		max-width: 100%;
		transform: translateX(15px);
	}

	@media ${device.mobileS} {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		align-items: start;
		max-width: calc(100% - 15px);
		transform: translateX(15px);
	}

	@media ${device.laptop} {
		max-width: 500px;
	}

	@media ${device.desktop} {
		max-width: 600px;
	}

	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
`;

export const HighlightBorder = styled.div<{ $leftColor: string }>`
	width: 6px;
	height: 100%;
	border-radius: 8px 0 0 8px;
	background: ${({ $leftColor }) => $leftColor};
	transition: width 0.3s ease;
	z-index: 2;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow: hidden;
	border-radius: 8px;
	background: ${colors.card.background};
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	transition: opacity 0.3s ease;

	&:hover ${ContainerText} {
		transform: translateX(10px);
		@media ${device.mobileM} {
			transform: translateX(10px);
		}
	}

	&:hover ${HighlightBorder} {
		width: 10px;
	}

	&:hover ${ContainerImageSite} {
		transform: translateX(10px);
		max-width: 100%;

		@media ${device.mobileM} {
			max-width: 100%;
		}
		@media ${device.mobileS} {
			max-width: calc(100% - 15px);
		}
		@media ${device.laptop} {
			max-width: 350px;
		}
		@media ${device.desktop} {
			max-width: 400px;
		}
		opacity: 1;
	}

	&:hover ${ContainerIcons}, &:hover ${ContainerTechs} {
		transform: translateX(10px);
		opacity: 1;
	}
`;

export const InsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	gap: 12px;
	padding: 16px 24px;
	box-sizing: border-box;

	@media ${device.mobileM} {
		padding: 12px;
	}
	@media ${device.laptop} {
		padding: 16px;
	}
	@media ${device.desktop} {
		padding: 16px 24px;
	}
`;
