import { images } from '@/images';
import { useCommonStore } from '@/store';
import { Title } from '@/styles';
import { colors, contactsData, device, useResources } from '@/utils';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Idiom, StyledButton } from '.';
import { useContacts } from '@/hooks';

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 250px;
	display: flex;
	@media ${device.laptop} {
		display: none;
	}
	justify-content: space-between;
	background-color: ${colors.card.background};
	border-right: 1px solid ${colors.card.border};
	border-bottom-right-radius: 16px;
	backdrop-filter: blur(10px);
	color: #fff;
	transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
	transition: transform 0.3s ease-in-out;
	flex-direction: column;
	z-index: 4;
`;

const NavList = styled.div`
	display: flex;
	height: min-content;
	padding: 24px;
	flex-direction: row;
	gap: 8px;
	flex-wrap: wrap;
`;

const ContainerIdiom = styled.div`
	gap: 8px;
	flex-direction: column;
	align-items: center;
	display: flex;
	padding: 0px 0px 24px;
`;

const ContainerHeader = styled.div``;

const Apresentation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 12px;
	padding: 12px;
`;

const Icon = styled.img`
	width: 50px;
	height: 50px;
    @media ${device.mobileM} {
     width: 40px;
     height: 40px;
    };
	border-radius: 50%;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	padding: 8px;
    &: media 
	&:hover {
		transform: rotate(-5deg) scale(1.05);
	}
`;

const Overlay = styled.div<{ $isVisible: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	@media ${device.laptop} {
		display: none;
	}
	background: ${(props) => (props.$isVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
	z-index: ${(props) => (props.$isVisible ? 3 : 0)};
	transition: background 0.3s ease-in-out;
`;

export const Sidebar: FC = () => {
	const isSidebarOpen = useCommonStore((store) => store.isOpenSidebar);
	const setIsOpenSidebar = useCommonStore((store) => store.setIsOpenSidebar);
	const language = useCommonStore((store) => store.language);
	const resources = useResources();
	const isEnglish = language === 'en';
	const { openLinks } = useContacts();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1023 && isSidebarOpen) {
				setIsOpenSidebar(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isSidebarOpen]);

	useEffect(() => {
		return () => {
			setIsOpenSidebar(false);
		};
	}, []);

	return (
		<>
			<SidebarWrapper $isOpen={isSidebarOpen}>
				<ContainerHeader>
					<Apresentation>
						<Icon src={images.SiteHeader.src} />
						<Title>{resources.sidebar.contacts}</Title>
					</Apresentation>
					<NavList>
						{[...contactsData].map((e, key) => {
							const widthEmail = e.type === 'email' ? '70%' : '100%';
							const { icon, text, type, url, textPT } = e;
							return (
								<StyledButton
									key={`${text}-${key}`}
									icon={icon}
									text={isEnglish ? text : (textPT ?? text)}
									width={type === 'copy-email' ? 'min-content' : widthEmail}
									onClick={() => openLinks({ type, url })}
								/>
							);
						})}
					</NavList>
				</ContainerHeader>
				<ContainerIdiom>
					<Idiom />
				</ContainerIdiom>
			</SidebarWrapper>
			<Overlay $isVisible={isSidebarOpen} onClick={() => setIsOpenSidebar(false)} />
		</>
	);
};
