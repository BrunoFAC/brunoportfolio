'use client';
import { ProfileInfo, TechStacks, Overview, Projects } from '@/sections';
import './page.css';
import { FC } from 'react';
import styled from 'styled-components';
import { Alert, Background, Footer, HeaderNavBar, Sidebar } from '@/components';
import { colors, device } from '@/utils';

const Page = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${colors.black};
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0px 16px;
	@media ${device.tabletM} {
		gap: 16px;
	}

	@media ${device.laptop} {
		max-width: 1024px;
		width: calc(100% - 32px);
		height: 100%;
		justify-content: start;
		display: flex;
		gap: 16px;
		flex-direction: row;
	}

	@media ${device.desktop} {
		max-width: 1280px;
		width: calc(100% - 32px);
		height: 100%;
		gap: 16px;
	}
`;

const ContainerProfile = styled.div`
	height: 100%;
	flex-direction: column;
	margin: 0px 0px 16px 0px;
	@media ${device.tabletM} {
		gap: 16px;
		display: flex;
		justify-content: center;
		margin: 16px 16px 0px 16px;
	}

	@media ${device.laptop} {
		width: 45%;
		display: flex;
		top: 16px;
		gap: 16px;
		position: sticky;
	}
	@media ${device.desktop} {
		width: 40%;
		display: flex;
		top: 16px;
		gap: 16px;
		position: sticky;
	}
`;

const ContainerInfo = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.tabletM} {
		display: flex;
		justify-content: center;
		gap: 16px;
		margin: 0 16px 16px;
	}
	@media ${device.laptop} {
		width: 55%;
		display: flex;
		margin: 16px 0 16px;
		gap: 16px;
	}
	@media ${device.desktop} {
		gap: 16px;
		margin: 16px 0 16px;
		width: 60%;
		gap: 16px;
	}
`;

const Home: FC = () => {
	return (
		<Page>
			<Alert />
			<Background />
			<Sidebar />
			<HeaderNavBar />
			<Container>
				<ContainerProfile>
					<ProfileInfo timer={0} />
					<TechStacks timer={500} />
				</ContainerProfile>
				<ContainerInfo>
					<Overview timer={750} />
					<Projects timer={1000} />
				</ContainerInfo>
			</Container>
			<Footer />
		</Page>
	);
};

export default Home;
