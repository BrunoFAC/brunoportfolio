import { FadeIn, HighlightBox } from '@/components';
import { ProjectProps, useResources } from '@/utils';
import { useVisibility } from '@/hooks';
import { images } from '@/images';
import { ItemDescription, ItemTitle } from '@/styles';
import React, { FC, useEffect, useRef, useState } from 'react';
import {
	Container,
	HighlightBorder,
	InsideContainer,
	ContainerText,
	HeadSite,
	ContainerTitleLabel,
	ContainerTechs,
	ContainerIcons,
	Icon,
} from './listOfProjects.cardProject.styles';
import { useCommonStore } from '@/store';

export interface CardProjectProps {
	card: ProjectProps;
}
export const CardProject: FC<CardProjectProps> = (props) => {
	const resources = useResources();
	const language = useCommonStore((store) => store.language);
	const isEnglish = language === 'en';
	const openLinks = (url: string) => {
		window.open(url, '_blank');
	};

	const { gitHub, label, liveDemo, title, labelPT, headerIcon, isSquared, techs, type, leftColor } = props.card;

	const typeOfProject =
		type === 'company'
			? resources.projects.listOfProjects.card.typeOfProject.company
			: resources.projects.listOfProjects.card.typeOfProject.personal;

	const elementRef = useRef(null);
	const { isVisible } = useVisibility(elementRef, 1000);
	const [stopAnimation, setStopAnimation] = useState<boolean>(false);

	useEffect(() => {
		isVisible && !stopAnimation && setStopAnimation(true);
	}, [stopAnimation, isVisible]);
	return (
		<FadeIn isVisible={stopAnimation ? true : isVisible}>
			<Container ref={elementRef}>
				<HighlightBorder $leftColor={leftColor} />
				<InsideContainer>
					<ContainerText>
						<HeadSite $isSquared={isSquared} src={headerIcon} alt={title} />
						<ContainerTitleLabel>
							<ItemTitle>{title}</ItemTitle>
							<ItemDescription fontWeight={400}>{typeOfProject}</ItemDescription>
						</ContainerTitleLabel>
					</ContainerText>
					<ContainerText>
						<ItemDescription>{isEnglish ? label : labelPT}</ItemDescription>
					</ContainerText>
					<ContainerTechs>
						{[...(techs ?? [])]
							?.sort((a, b) => b?.title?.length - a?.title?.length)
							?.map((e, key) => (
								<HighlightBox
									key={`${e.title}-${key}`}
									icon={e.icon}
									text={e.title}
									padding={8}
									iconSize={{ height: 18, width: 18 }}
								/>
							))}
					</ContainerTechs>
					<ContainerIcons>
						{gitHub && <Icon src={images.Github.src} onClick={() => openLinks(gitHub)} alt={`github`} />}
						<Icon src={images.Link.src} onClick={() => openLinks(liveDemo)} alt={`livedemo`} />
					</ContainerIcons>
				</InsideContainer>
			</Container>
		</FadeIn>
	);
};
