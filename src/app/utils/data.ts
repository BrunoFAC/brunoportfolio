import { images } from '@/images';
import { colors } from './colors';

// #region PROFILE INFO Contacts
export type IconType = 'email' | 'copy-email' | 'link' | 'cv';

export interface ContactsDataProps {
	icon: string;
	text: string;
	url: string;
	type: IconType;
}

export const contactsData: ContactsDataProps[] = [
	{
		icon: images.Email.src,
		text: 'Contact Me',
		type: 'email',
		url: 'brunoalmeida15032001@gmail.com',
	},
	{
		icon: images.Copy.src,
		text: '',
		type: 'copy-email',
		url: 'brunoalmeida15032001@gmail.com',
	},
	{
		icon: images.LinkedIn.src,
		text: 'LinkedIn',
		type: 'link',
		url: 'https://www.linkedin.com/in/bruno-almeida07/',
	},
	{
		icon: images.Github.src,
		text: 'GitHub',
		type: 'link',
		url: 'https://github.com/BrunoFAC',
	},
	{
		icon: images.Download.src,
		text: 'Resume',
		type: 'cv',
		url: '/assets/cv-bruno.pdf',
	},
];

// #endregion Contacts

// #region TECH STACKS Techs
export interface TechsProps {
	title: string;
	subtitle: string;
	image: string;
	backgroundColor: string;
	url: string;
}

export const techs: TechsProps[] = [
	{
		title: 'React',
		subtitle: 'Javascript Library',
		image: images.React.src,
		backgroundColor: colors.techs.react,
		url: 'https://react.dev/',
	},
	{
		title: 'Typescript',
		subtitle: 'Javascript but better',
		image: images.Typescript.src,
		backgroundColor: colors.techs.typescript,
		url: 'https://www.typescriptlang.org/',
	},
	{
		title: 'Next',
		subtitle: 'React Framework',
		image: images.Next.src,
		backgroundColor: colors.techs.next,
		url: 'https://nextjs.org/',
	},
	{
		title: 'Azure DevOps',
		subtitle: 'Code Management',
		image: images.DevOps.src,
		backgroundColor: colors.techs.devops,
		url: 'https://azure.microsoft.com/pt-pt/pricing/purchase-options/azure-account?icid=azure-devops',
	},
	{
		title: 'Git',
		subtitle: 'Version Control',
		image: images.Git.src,
		backgroundColor: colors.techs.git,
		url: 'https://git-scm.com/',
	},
	{
		title: 'GitHub',
		subtitle: 'Code Management',
		image: images.Github.src,
		backgroundColor: colors.techs.github,
		url: 'https://github.com/',
	},
	{
		title: 'Zustand',
		subtitle: 'Store Management',
		image: images.Zustand.src,
		backgroundColor: colors.techs.zustand,
		url: 'https://zustand-demo.pmnd.rs/',
	},
	{
		title: 'Module Federation',
		subtitle: 'Microfrontends',
		image: images.ModuleFederation.src,
		backgroundColor: colors.techs.react,
		url: 'https://module-federation.io/',
	},
];
// #endregion SECTION TECH STACKS Techs

// #region OVERVIEW Roles
export interface Tech {
	title: string;
	icon: string;
}
export interface Timeline {
	title: string;
	type: 'company' | 'academic';
	company: string;
	iconCompany?: string;
	projects?: string;
	subtitle: string[];
	time: string;
	techs?: Tech[];
}

export const professional: Timeline[] = [
	{
		title: 'SI Consultant',
		company: 'ITSector',
		type: 'company',
		iconCompany: images.Work.src,
		projects: 'MSE (Millennium BCP Corp)',
		time: 'Apr 2024 - Current ',
		subtitle: [
			'Developed and maintained React and TypeScript code within a micro frontends architecture.',
			'Collaborated with back-end teams and designers to enhance usability and user experience.',
			'Participated in Scrum ceremonies, supporting planning, decision-making, and troubleshooting to drive project progress.',
			'Utilized Azure DevOps for continuous integration.',
		],
		techs: [
			{
				title: 'React',
				icon: images.React.src,
			},
			{
				title: 'Typescript',
				icon: images.Typescript.src,
			},
			{
				title: 'Zustand',
				icon: images.Zustand.src,
			},
			{
				title: 'Module Federations',
				icon: images.ModuleFederation.src,
			},
		],
	},
	{
		title: 'SI Programmer',
		company: 'ITSector',
		type: 'company',
		iconCompany: images.Work.src,
		projects: 'MSE (Millennium BCP Corp)',
		time: 'Aug 2022 - Apr 2024',
		subtitle: [
			'Developed and maintained website of Millennium BCP Corp using React and TypeScript.',
			'Collaborated with back-end teams and designers to improve usability.',
			'Participated in Scrum ceremonies, contributing to project planning, decision-making, and troubleshooting, while working collaboratively with the team to ensure project progress',
		],

		techs: [
			{
				title: 'React',
				icon: images.React.src,
			},
			{
				title: 'Typescript',
				icon: images.Typescript.src,
			},
			{
				title: 'Zustand',
				icon: images.Zustand.src,
			},
			{
				title: 'Module Federations',
				icon: images.ModuleFederation.src,
			},
		],
	},
];

export const academic: Timeline[] = [
	{
		title: 'Computer Engineering',
		type: 'academic',
		subtitle: ['Completed degree'],
		time: 'Sep 2019 - Jul 2022',
		company: 'ISPGaya',
	},
	{
		title: 'Software Developer',
		type: 'academic',
		iconCompany: images.Work.src,
		subtitle: ['Internship'],
		time: 'Fev 2022 - Jun 2022',
		company: 'ITSector',
	},
];
// #endregion SECTION OVERVIEW Roles

// #region PROJECTS Cards Data
export interface ProjectProps {
	title: string;
	headerIcon: string;
	isSquared?: boolean;
	label: string;
	gitHub?: string;
	liveDemo: string;
	leftColor: string;
	type: 'personal' | 'company';
	techs?: Tech[];
}

export const cardsData: ProjectProps[] = [
	{
		title: 'MSE - Melhor Site Empresas',
		type: 'company',
		label: " I contributed to the front-end development and architectural design of this project at ITSector, collaborating with a team to build Millennium BCP's corporate platform. ",
		headerIcon: images.Millennium.src,
		leftColor: colors.project.leftMSEColor,
		isSquared: true,
		liveDemo: 'https://corp.millenniumbcp.pt/',
		techs: [
			{
				title: 'React',
				icon: images.React.src,
			},
			{
				title: 'Typescript',
				icon: images.Typescript.src,
			},
			{
				title: 'Zustand',
				icon: images.Zustand.src,
			},
			{
				title: 'Azure DevOps',
				icon: images.DevOps.src,
			},
			{
				title: 'Module Federation',
				icon: images.ModuleFederation.src,
			},
		],
	},
	{
		title: 'E-commerce Store',
		type: 'personal',
		label: 'Responsive e-commerce website, featuring profile management, order history, filters, favorites, shopping cart, and purchase transactions.',
		gitHub: 'https://github.com/BrunoFAC/storeWithNextJs',
		liveDemo: 'https://dummy-store-fake-api.netlify.app/',
		leftColor: colors.project.leftECommerceColor,
		headerIcon: images.StoreIconDarkMode.src,
		techs: [
			{
				title: 'React',
				icon: images.React.src,
			},
			{
				title: 'Typescript',
				icon: images.Typescript.src,
			},
			{
				title: 'Next',
				icon: images.Next.src,
			},
			{
				title: 'Zustand',
				icon: images.Zustand.src,
			},

			{
				title: 'GitHub',
				icon: images.Github.src,
			},
		],
	},

	{
		title: 'Portfolio',
		type: 'personal',
		headerIcon: images.SiteHeader.src,
		leftColor: colors.project.leftPortfolioColor,
		label: 'Built a portfolio from scratch using styled-components for styling.',
		gitHub: 'https://github.com/BrunoFAC/brunoportfolio',
		liveDemo: '',
		techs: [
			{
				title: 'React',
				icon: images.React.src,
			},
			{
				title: 'Typescript',
				icon: images.Typescript.src,
			},
			{
				title: 'Next',
				icon: images.Next.src,
			},
			{
				title: 'Zustand',
				icon: images.Zustand.src,
			},

			{
				title: 'GitHub',
				icon: images.Github.src,
			},
		],
	},
];
// #endregion
