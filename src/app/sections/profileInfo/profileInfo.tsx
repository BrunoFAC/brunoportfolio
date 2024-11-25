import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InfoViews } from './views';
import { Header } from './views/header';
import { useVisibility } from '@/hooks';
import { VisibilityProps } from '@/utils';
import { GrowOut, Card } from '@/components';

const Container = styled.div`
	display: flex;
	width: 100%;
	height: min-content;
`;

const ContainerCard = styled.div`
	display: flex;
	height: 100%;
	gap: 16px;
	margin: 24px;
	justify-content: flex-start;
	flex-direction: column;
`;

const ContainerContent = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
`;

export const ProfileInfo: FC<VisibilityProps> = ({ timer }) => {
	const { Contacts, ProfileHighlights, LocationUser } = InfoViews;
	const elementRef = useRef(null);
	const { isVisible } = useVisibility(elementRef, timer);
	const [stopAnimation, setStopAnimation] = useState<boolean>(false);

	useEffect(() => {
		isVisible && !stopAnimation && setStopAnimation(true);
	}, [stopAnimation, isVisible]);
	return (
		<Container>
			<GrowOut isVisible={stopAnimation ? true : isVisible}>
				<Card width="-webkit-fill-available">
					<ContainerCard ref={elementRef}>
						<Header />
						<ContainerContent>
							<LocationUser />
							<ProfileHighlights />
							<Contacts />
						</ContainerContent>
					</ContainerCard>
				</Card>
			</GrowOut>
		</Container>
	);
};
