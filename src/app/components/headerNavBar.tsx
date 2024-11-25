import { colors, device, useResources } from '@/utils';
import { images } from '@/images';
import { Title } from '@/styles';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCommonStore } from '@/store';

const reveal = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
	display: none;
	@media ${device.tabletM} {
		display: flex;
		backdrop-filter: blur(10px);
		top: 0;
		width: -moz-available;
		width: -webkit-fill-available;
		width: fill-available;
		height: 80px;
		background: ${colors.card.background};
		position: sticky;
		z-index: 2;
		border-bottom: 1px solid ${colors.card.border};
		box-shadow: 0px 0px 11px 0px ${colors.black};
		flex-direction: row;
		border-bottom-right-radius: 16px;
		justify-content: center;
		animation: ${reveal} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transition:
			height 0.3s ease,
			opacity 0.3s ease;
	}
`;

const InsideContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media ${device.tabletM} {
		gap: 16px;
		margin: 0px 16px;
	}
`;

const Apresentation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 12px;
`;

const Icon = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	padding: 8px;
	@media ${device.mobileM} {
		width: 40px;
		height: 40px;
	}
	&:hover {
		transform: rotate(-5deg) scale(1.05);
	}
`;

export const HeaderNavBar: FC = () => {
	const setIsOpenSidebar = useCommonStore((store) => store.setIsOpenSidebar);
	const resources = useResources();
	return (
		<Container>
			<InsideContainer>
				<Apresentation>
					<Icon onClick={() => setIsOpenSidebar(true)} src={images.Menu.src} />
					<Title>{resources.navbar}</Title>
				</Apresentation>
				<Icon src={images.SiteHeader.src} />
			</InsideContainer>
		</Container>
	);
};
