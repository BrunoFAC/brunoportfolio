import styled from 'styled-components';
import { colors, device } from '@/utils';

export const Container = styled.div`
	display: flex;
	padding-left: 6px;
	gap: 16px;
`;

export const ContainerPulse = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContainerPosition = styled.div<{ $isLast: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 4px;
	margin-bottom: ${({ $isLast }) => ($isLast ? '5px' : '25px')};
`;

export const Connect = styled.span`
	display: flex;
	width: 1px;
	min-height: 20px;
	height: 100%;
	background: ${colors.card.border};
`;

export const ContainerTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 8px;
`;

export const IconWork = styled.img`
	width: 16px;
	height: 16px;
	@media ${device.mobileM} {
		width: 13px;
		height: 13px;
	}
`;

export const ContainerPositionLocation = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	color: ${colors.gray.light};
	gap: 4px;
`;

export const ContainerTechs = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	color: ${colors.gray.light};
	margin-top: 2px;
	gap: 8px;

	@media ${device.mobileM} {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.mobileS} {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ContainerDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

export const ContainerDetailsLink = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 6px;
	cursor: pointer;
	user-select: none;
`;

export const IconSeeDetails = styled.p<{ $seeMoreDetails: boolean; $isHovering: boolean }>`
	color: ${colors.white};
	transition: transform 0.3s ease;
	font-weight: 700;
	display: inline-block;
	font-size: 15px;
	${({ $seeMoreDetails }) => {
		return { transform: $seeMoreDetails ? 'rotate(-90deg) translateX(-1px)' : 'rotate(90deg) translateX(1px)' };
	}}}}
	
	
`;

export const ContainerDescriptionDetails = styled.div`
	width: 100%;
`;

export const AccordionContent = styled.div<{ $expanded: boolean }>`
	overflow: hidden;
	transition: max-height 0.3s ease;
	max-height: ${({ $expanded }) => ($expanded ? '500px' : '0px')};
	display: flex;
	flex-direction: column;
`;
