import { Idiom } from '@/components/idiom';
import { ItemDescription } from '@/styles';
import { colors, useResources } from '@/utils';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: -moz-available;
	width: -webkit-fill-available;
	width: fill-available;
	justify-content: center;
	align-items: center;
	padding: 40px;
	flex-direction: column;
	gap: 16px;
	background: ${colors.card.background};
`;

const ContainerIdiom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
export const Footer: FC = () => {
	const resources = useResources();
	const year = new Date().getFullYear();
	return (
		<Container>
			<ItemDescription color={colors.gray.light}>{`${year} ${resources.footer}`}</ItemDescription>
			<ContainerIdiom>
				<ItemDescription color={colors.gray.light}>{resources.language}</ItemDescription>
				<Idiom />
			</ContainerIdiom>
		</Container>
	);
};
