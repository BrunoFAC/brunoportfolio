import { FC } from 'react';
import { HeaderWrapper } from '@/components';
import { Title, Subtitle, Highlight } from '@/styles';
import { useResources } from '@/utils';
import { useCommonStore } from '@/store';

export const Header: FC = () => {
	const resources = useResources();

	const language = useCommonStore((store) => store.language);
	const isEnglish = language === 'en';
	const isPortuguese = language === 'pt';
	return (
		<HeaderWrapper>
			<Title>{resources.overview.header.title}</Title>
			<Subtitle>
				{resources.overview.header.subtitle.my}{' '}
				<Highlight>{resources.overview.header.subtitle.professional}</Highlight>{' '}
				{isEnglish ? resources.overview.header.subtitle.experience : null}
				{resources.overview.header.subtitle.and}
				{isPortuguese ? resources.overview.header.subtitle.background + ' ' : null}
				<Highlight>{resources.overview.header.subtitle.academic}</Highlight>{' '}
				{isEnglish ? resources.overview.header.subtitle.background : null}
			</Subtitle>
		</HeaderWrapper>
	);
};
