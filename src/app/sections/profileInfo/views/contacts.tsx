import { FC } from 'react';
import styled from 'styled-components';
import { InfoViews } from '../views';
import { contactsData } from '@/utils';

const Container = styled.div`
	display: flex;
	height: min-content;
	justify-content: space-between;
	flex-direction: row;
	gap: 4px;
	width: 100%;
	flex-wrap: wrap;
	flex-grow: 1;
`;

export interface IconsWithTooltipProps {
	image: string;
	text: string;
}

export const Contacts: FC = () => {
	const { IconTextButton } = InfoViews;
	return (
		<Container>
			{contactsData.map((e, key) => (
				<IconTextButton icon={e.icon} text={e.text} type={e.type} url={e.url} key={`${e.text}-${key}`} />
			))}
		</Container>
	);
};
