import { HighlightBox } from '@/components';
import { colors, device, useResources } from '@/utils';
import { images } from '@/images';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: wrap;
	flex: 1;
	gap: 8px;
	background: ${colors.card.background};
	padding: 16px;
	height: min-content;
	border-radius: 8px;
	@media ${device.tablet} {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${device.mobileM} {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.mobileS} {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ProfileHighlights: FC = () => {
	const resources = useResources();

	const differenceTimezone = new Date().getTimezoneOffset() / 60;

	const calculateTimezone = differenceTimezone >= 0 ? `GMT +${differenceTimezone}` : `GMT ${differenceTimezone}`;

	const birthDate = new Date('2001-03-15');
	const startedWorking = new Date('2022-08-01');
	const actualDate = new Date();

	const differenceInMs = (actualDate.getTime() - startedWorking.getTime()) / (1000 * 60 * 60 * 24 * 365.25); // use of 365.25 to consider leap years
	const diffInMilliseconds = actualDate.getTime() - birthDate.getTime();

	const yearsOfExperience = differenceInMs.toFixed(1);

	const age = new Date(diffInMilliseconds).getUTCFullYear() - 1970;

	const infoArray = [
		{
			icon: images.Dev.src,
			text: resources.profileInfo.profileHighlights.freelancer,
		},
		{
			icon: images.Pin.src,
			text: 'Portugal',
		},
		{
			icon: images.Experience.src,
			text: `+ ${yearsOfExperience} ${resources.profileInfo.profileHighlights.years}`,
		},
		{
			icon: images.Language.src,
			text: resources.profileInfo.profileHighlights.language,
		},
		{
			icon: images.Coffee.src,
			text: resources.profileInfo.profileHighlights.coffeeAddict,
		},
		{
			icon: images.ID.src,
			text: `${age} ${resources.profileInfo.profileHighlights.age}`,
		},
		{
			icon: images.Clock.src,
			text: calculateTimezone,
		},
	];

	return (
		<Container>
			{[...infoArray]
				//reorder for text length
				.sort((a, b) => b.text.length - a.text.length)
				.map((e, key) => (
					<HighlightBox key={`${e.text}-${key}`} icon={e.icon} text={e.text} />
				))}
		</Container>
	);
};
