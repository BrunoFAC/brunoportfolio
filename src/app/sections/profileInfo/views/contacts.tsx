import { FC } from 'react';
import styled from 'styled-components';
import { InfoViews } from '../views';
import { contactsData } from '@/utils';
import { useCommonStore } from '@/store';

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
	const language = useCommonStore((store) => store.language);
	const isEnglish = language === 'en';
	return (
		<Container>
			{contactsData.map((e, key) => (
				<IconTextButton
					icon={e.icon}
					text={!isEnglish && e.textPT ? e.textPT : e.text}
					type={e.type}
					url={e.url}
					urlPT={e.urlPT}
					key={`${e.text}-${key}`}
				/>
			))}
		</Container>
	);
};
