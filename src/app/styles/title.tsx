import { colors, device } from '@/utils';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const TitleP = styled.p<{ $color?: string }>`
	color: ${({ $color }) => $color ?? colors.white};
	font-weight: 700;
	font-size: 24px;

	@media ${device.tabletM} {
		font-size: 24px;
	}
	@media ${device.mobileM} {
		font-size: 17px;
	}
	@media ${device.laptop} {
		font-size: 20px;
	}

	@media ${device.desktop} {
		font-size: 24px;
	}
`;

interface TitleProps {
	children: ReactNode;
	color?: string;
}

export const Title: FC<TitleProps> = ({ color, children }) => {
	return <TitleP $color={color}>{children}</TitleP>;
};
