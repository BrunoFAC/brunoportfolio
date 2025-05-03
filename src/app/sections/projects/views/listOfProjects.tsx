import { cardsData, colors, useResources } from '@/utils';
import styled from 'styled-components';
import { ProjectsViews } from '../views';
import { FC, useState } from 'react';
import { SimpleButton } from '@/components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const ContainerProjects = styled.div`
	background: ${colors.card.background};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0px 24px 24px;
	padding: 16px;
	gap: 16px;
	border-radius: 8px;
	height: 100%;
	position: relative;
	gap: 20px;
`;

const ContainerButton = styled.div`
	display: flex;
	height: min-content;
	justify-content: flex-start;
	flex-direction: row;
	padding: 0px 24px;
	gap: 8px;
`;

export const ListOfProjects: FC = () => {
	const resources = useResources();
	const [projectType, setProjectType] = useState<'company' | 'personal'>('company');
	const isProfessional = projectType === 'company';
	const isHobby = projectType === 'personal';
	return (
		<Container>
			<ContainerButton>
				<SimpleButton
					text={resources.techStacks.professional}
					isSelected={isProfessional}
					onClick={() => setProjectType('company')}
				/>
				<SimpleButton
					text={resources.techStacks.hobby}
					isSelected={isHobby}
					onClick={() => setProjectType('personal')}
				/>
			</ContainerButton>
			<ContainerProjects>
				{cardsData
					.filter((e) => e.type === projectType)
					.map((card, index) => {
						return <ProjectsViews.CardProject key={`${card.title}-${index}`} card={card} />;
					})}
			</ContainerProjects>
		</Container>
	);
};
