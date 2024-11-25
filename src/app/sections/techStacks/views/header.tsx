import { FC } from 'react';
import { HeaderWrapper } from '@/components';
import { Title, Subtitle, Highlight } from '@/styles';
import { useResources } from '@/utils';

export const Header: FC = () => {
	const resources = useResources();

	return (
		<HeaderWrapper>
			<Title>{resources.techStacks.title}</Title>
			<Subtitle>
				{resources.techStacks.subtitle.the}{' '}
				<Highlight>{resources.techStacks.subtitle.primaryTechnologies}</Highlight>{' '}
				{resources.techStacks.subtitle.currentlyWorkWith}
			</Subtitle>
		</HeaderWrapper>
	);
};
