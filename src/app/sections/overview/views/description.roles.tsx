import { HighlightBox, Pulse } from '@/components';
import { useCommonStore } from '@/store';
import { ItemDescription, ItemTitle } from '@/styles';
import { colors, Timeline, useResources } from '@/utils';
import { FC, useState } from 'react';
import {
	AccordionContent,
	Connect,
	Container,
	ContainerDescriptionDetails,
	ContainerDetails,
	ContainerDetailsLink,
	ContainerPosition,
	ContainerPositionLocation,
	ContainerPulse,
	ContainerTechs,
	ContainerTitle,
	IconSeeDetails,
	IconWork,
} from './description.roles.styles';

export interface RolesProps {
	roles: Timeline;
	isLast: boolean;
}

export const Roles: FC<RolesProps> = ({ roles, isLast }) => {
	const resources = useResources();
	const [seeMoreDetails, setSeeMoreDetails] = useState<boolean>(false);
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const { company, subtitlePT, timePT, titlePT, time, iconCompany, type, title, projects, subtitle, techs } = roles;

	const language = useCommonStore((store) => store.language);
	const isEnglish = language === 'en';
	const subtitleLabel = isEnglish ? subtitle : (subtitlePT ?? subtitle);
	const timeLabel = isEnglish ? time : timePT;
	const titleLabel = isEnglish ? title : titlePT;

	return (
		<Container>
			<ContainerPulse>
				<Pulse width={10} />
				<Connect />
			</ContainerPulse>
			<ContainerPosition $isLast={isLast}>
				<ContainerTitle>
					{iconCompany && <IconWork src={iconCompany} alt={iconCompany} />}
					<ItemTitle>{titleLabel}</ItemTitle>
				</ContainerTitle>
				<ContainerPositionLocation>
					<ItemDescription fontWeight={600}>{company}</ItemDescription>
					<ItemDescription>· {timeLabel}</ItemDescription>
				</ContainerPositionLocation>
				{projects && (
					<ItemDescription>
						<ItemDescription color={colors.white} fontWeight={700}>
							{resources.overview.description.roles.projects}
						</ItemDescription>
						{` ${projects}`}
					</ItemDescription>
				)}
				<ContainerDetails>
					{subtitleLabel.length > 1 && (
						<ContainerDetailsLink
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
							onClick={() => setSeeMoreDetails(!seeMoreDetails)}
						>
							<ItemDescription fontWeight={600} color={colors.white}>
								{seeMoreDetails
									? resources.overview.description.roles.hideDetails
									: resources.overview.description.roles.seeDetails}
							</ItemDescription>
							<IconSeeDetails $isHovering={isHovering} $seeMoreDetails={seeMoreDetails}>
								{'>'}
							</IconSeeDetails>
						</ContainerDetailsLink>
					)}
					{type === 'academic' ? (
						subtitleLabel.map((e, key) => <ItemDescription key={`${e}-${key}`}>· {e}</ItemDescription>)
					) : (
						<AccordionContent $expanded={seeMoreDetails}>
							{[...subtitleLabel]
								.sort((a, b) => b.length - a.length)
								.map((e, key) => (
									<ContainerDescriptionDetails key={`${e}-${key}`}>
										<ItemDescription>· {e}</ItemDescription>
									</ContainerDescriptionDetails>
								))}
						</AccordionContent>
					)}
				</ContainerDetails>

				{techs && (
					<ContainerTechs>
						{[...techs]
							.sort((a, b) => b.title.length - a.title.length)
							?.map((e, key) => <HighlightBox key={`${e.title}-${key}`} icon={e.icon} text={e.title} />)}
					</ContainerTechs>
				)}
			</ContainerPosition>
		</Container>
	);
};
