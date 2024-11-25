import { colors } from '@/utils';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ $width: string }>`
	display: flex;
	background: ${colors.card.background};
	${({ $width }) => {
		if ($width === '-webkit-fill-available') {
			return 'width: fill-available; width: -moz-available; width: -webkit-fill-available;';
		}
		return `width: ${$width}`;
	}};
	border-radius: 8px;
	flex-direction: column;
	border: 1px solid ${colors.card.border};
`;

export interface CardProps {
	width: string;
	children: ReactNode;
}
export const Card: FC<CardProps> = ({ children, width }) => {
	return <CardContainer $width={width}>{children}</CardContainer>;
};
