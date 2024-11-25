import { HeaderWrapper } from '@/components';
import { useCommonStore } from '@/store';
import { Title, Subtitle, Highlight } from '@/styles';
import { useResources } from '@/utils';
import { FC } from 'react';

export const Header: FC = () => {
	const resources = useResources();
	const language = useCommonStore((store) => store.language);

	return (
		<HeaderWrapper>
			<Title>{resources.projects.header.title}</Title>
			<Subtitle>
				{resources.projects.header.subtitle.my}{' '}
				{language === 'pt' ? resources.projects.header.subtitle.projects : null}{' '}
				<Highlight>{resources.projects.header.subtitle.professional}</Highlight>{' '}
				{resources.projects.header.subtitle.and}
				<Highlight>{resources.projects.header.subtitle.personal}</Highlight>{' '}
				{language === 'en' ? resources.projects.header.subtitle.projects : null}
			</Subtitle>
		</HeaderWrapper>
	);
};
