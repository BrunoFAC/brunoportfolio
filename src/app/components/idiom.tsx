import { FC } from 'react';
import styled from 'styled-components';
import { useCommonStore } from '@/store';
import { SimpleButton } from '@/components';
import { images } from '@/images';

const ContainerButton = styled.div`
	display: flex;
	height: min-content;
	width: min-content;
	justify-content: flex-start;
	flex-direction: row;
`;

export interface IconsWithTooltipProps {
	image: string;
	text: string;
}
export type IconType = 'email' | 'link' | 'cv';
export interface InfoArray {
	icon: string;
	text: string;
	url: string;
	type: IconType;
}

export const Idiom: FC = () => {
	const setLanguage = useCommonStore((store) => store.setLanguage);
	const language = useCommonStore((store) => store.language);
	return (
		<ContainerButton>
			<SimpleButton
				removeBorderRadius="right"
				icon={images.EN.src}
				text={'EN'}
				isSelected={language === 'en'}
				onClick={() => setLanguage('en')}
			/>
			<SimpleButton
				removeBorderRadius="left"
				icon={images.PT.src}
				text={'PT'}
				isSelected={language === 'pt'}
				onClick={() => setLanguage('pt')}
			/>
		</ContainerButton>
	);
};
