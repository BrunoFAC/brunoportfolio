import { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, device, techs, useResources } from '@/utils';
import { ItemDescription } from '@/styles';
import { useCommonStore } from '@/store';
import { SimpleButton } from '@/components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const reveal = keyframes`
  0% {
	opacity: 0.1;
  }
  100% {
	opacity: 1;
  }
`;

const ContainerTechs = styled.div`
	padding: 0px 24px 24px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 12px;
	overflow: hidden;
	height: 100%;

	@media ${device.tablet} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${device.mobileS} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const TechStack = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	flex-direction: row;
	animation: ${reveal} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	transition:
		height 0.5s ease-in-out,
		opacity 0.5s ease-in-out;

	gap: 8px;
	color: ${colors.gray.light};
	background: ${colors.gray.dark};
	padding: 8px;
	height: min-content;
	border-radius: 8px;
	transition: 0.2s ease-in;
	&:hover {
		background: ${colors.gray.default};
		transform: rotate(-2deg);
	}
`;

const ContainerButton = styled.div`
	display: flex;
	height: min-content;
	justify-content: flex-start;
	flex-direction: row;
	padding: 0px 24px;
	gap: 8px;
`;

const TechImage = styled.img<{ $backgroundColor: string }>`
	width: 40px;
	height: 40px;
	border-radius: 8px;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	background: ${({ $backgroundColor }) => $backgroundColor};
`;

const TechSubtile = styled.p`
	color: ${colors.gray.light};
	font-weight: 500;
	font-size: 10px;
`;

export const Techs: FC = () => {
	const resources = useResources();

	const openLinks = (url: string) => {
		window.open(url, '_blank');
	};
	const language = useCommonStore((store) => store.language);
	const isEnglish = language === 'en';
	const [overview, setOverview] = useState<'hobby' | 'professional'>('professional');
	const isProfessional = overview === 'professional';
	const isHobby = overview === 'hobby';

	return (
		<Container>
			<ContainerButton>
				<SimpleButton
					text={resources.techStacks.professional}
					isSelected={isProfessional}
					onClick={() => setOverview('professional')}
				/>
				<SimpleButton
					text={resources.techStacks.hobby}
					isSelected={isHobby}
					onClick={() => setOverview('hobby')}
				/>
			</ContainerButton>
			<ContainerTechs>
				{techs
					.filter((e) => e.type === overview)
					.map((e, index) => (
						<TechStack onClick={() => openLinks(e.url)} key={`${index}-${e.title}`}>
							<TechImage $backgroundColor={e.backgroundColor} src={e.image} alt={e.title} />
							<ContainerText>
								<ItemDescription color={colors.white} fontWeight={600}>
									{e.title}
								</ItemDescription>
								<TechSubtile>{!isEnglish && e.subtitlePT ? e.subtitlePT : e.subtitle}</TechSubtile>
							</ContainerText>
						</TechStack>
					))}
			</ContainerTechs>
		</Container>
	);
};
