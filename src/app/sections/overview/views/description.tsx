import { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { academic, colors, professional, useResources } from '@/utils';
import { OverviewViews } from '../views';
import { SimpleButton } from '@/components';

const Container = styled.div`
	display: flex;
	background: ${colors.card.background};
	flex-direction: column;
	margin: 0px 24px 24px;
	padding: 16px;
	gap: 16px;
	border-radius: 8px;
`;

const ContainerButton = styled.div`
	display: flex;
	height: min-content;
	justify-content: flex-start;
	flex-direction: row;
	gap: 8px;
`;

const reveal = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const ContainerDesription = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	border-radius: 8px;
	overflow: hidden;
	animation: ${reveal} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	transition:
		height 0.5s ease-in-out,
		opacity 0.5s ease-in-out;
`;

export const Description: FC = () => {
	const resources = useResources();
	const [overview, setOverview] = useState<'professional' | 'academic'>('professional');
	const isAcademic = overview === 'academic';
	const isProfessional = overview === 'professional';

	const { Roles } = OverviewViews;

	return (
		<Container>
			<ContainerButton>
				<SimpleButton
					text={resources.overview.description.professional}
					isSelected={isProfessional}
					onClick={() => setOverview('professional')}
				/>
				<SimpleButton
					text={resources.overview.description.academic}
					isSelected={isAcademic}
					onClick={() => setOverview('academic')}
				/>
			</ContainerButton>
			{isProfessional && (
				<ContainerDesription>
					{professional.map((e, key) => (
						<Roles key={`${key}-${e.title}`} roles={e} isLast={key === professional.length - 1} />
					))}
				</ContainerDesription>
			)}
			{isAcademic && (
				<ContainerDesription>
					{academic.map((e, key) => (
						<Roles key={`${key}-${e.title}`} roles={e} isLast={key === academic.length - 1} />
					))}
				</ContainerDesription>
			)}
		</Container>
	);
};
