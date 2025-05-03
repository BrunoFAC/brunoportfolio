import { images } from '@/images';
import { colors } from './colors';

// #region PROFILE INFO Contacts
export type IconType = 'email' | 'copy-email' | 'link' | 'cv';

export interface ContactsDataProps {
	icon: string;
	text: string;
	textPT?: string;
	url: string;
	urlPT?: string;
	type: IconType;
}

export const contactsData: ContactsDataProps[] = [
	{
		icon: images.Email.src,
		text: 'Contact Me',
		textPT: 'Contacte-me',
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
		textPT: 'Currículo',
		type: 'cv',
		url: '/assets/cv-bruno.pdf',
		urlPT: '/assets/cv-bruno-pt.pdf',
	},
];

// #endregion Contacts

// #region TECH STACKS Techs
export interface TechsProps {
	title: string;
	subtitle: string;
	subtitlePT?: string;
	image: string;
	backgroundColor: string;
	url: string;
	type: 'hobby' | 'professional';
}

export const techs: TechsProps[] = [
	{
		title: 'React',
		subtitle: 'Javascript Library',
		subtitlePT: 'Biblioteca Javascript',
		image: images.React.src,
		backgroundColor: colors.techs.react,
		url: 'https://react.dev/',
		type: 'professional',
	},
	{
		title: 'Typescript',
		subtitle: 'Javascript but better',
		subtitlePT: 'Javascript mas melhor',
		image: images.Typescript.src,
		backgroundColor: colors.techs.typescript,
		url: 'https://www.typescriptlang.org/',
		type: 'professional',
	},
	{
		title: 'Next',
		subtitle: 'React Framework',
		image: images.Next.src,
		backgroundColor: colors.techs.next,
		url: 'https://nextjs.org/',
		type: 'professional',
	},
	{
		title: 'Azure DevOps',
		subtitle: 'Code Management',
		subtitlePT: 'Gestão de Código',
		image: images.DevOps.src,
		backgroundColor: colors.techs.devops,
		url: 'https://azure.microsoft.com/pt-pt/pricing/purchase-options/azure-account?icid=azure-devops',
		type: 'professional',
	},
	{
		title: 'Git',
		subtitle: 'Version Control',
		subtitlePT: 'Controlo de Versões',
		image: images.Git.src,
		backgroundColor: colors.techs.git,
		url: 'https://git-scm.com/',
		type: 'professional',
	},
	{
		title: 'GitHub',
		subtitle: 'Code Management',
		subtitlePT: 'Gestão de Código',
		image: images.Github.src,
		backgroundColor: colors.techs.github,
		url: 'https://github.com/',
		type: 'professional',
	},
	{
		title: 'Zustand',
		subtitle: 'Store Management',
		subtitlePT: 'Gestão de Estados',
		image: images.Zustand.src,
		backgroundColor: colors.techs.zustand,
		url: 'https://zustand-demo.pmnd.rs/',
		type: 'professional',
	},
	{
		title: 'Module Federation',
		subtitle: 'Microfrontends',
		image: images.ModuleFederation.src,
		backgroundColor: colors.techs.react,
		url: 'https://module-federation.io/',
		type: 'professional',
	},
	{
		title: 'Node',
		subtitle: 'JavaScript Runtime',
		image: images.Node.src,
		backgroundColor: colors.techs.zustand,
		url: 'https://nodejs.org/en/',
		type: 'hobby',
	},
	{
		title: 'GitLab',
		subtitle: 'Code Management',
		subtitlePT: 'Gestão de Código',
		image: images.GitLabLogo.src,
		backgroundColor: colors.techs.git,
		url: 'https://https://gitlab.com/',
		type: 'hobby',
	},
	{
		title: 'MySQL',
		subtitle: 'Relational Database',
		subtitlePT: 'Base de Dados Relacional',
		image: images.MySQL.src,
		backgroundColor: colors.techs.react,
		url: 'https://module-federation.io/',
		type: 'hobby',
	},
	{
		title: 'Vite',
		subtitle: 'Build Tool',
		image: images.ViteLogo.src,
		backgroundColor: colors.techs.zustand,
		url: 'https://vite.dev/',
		type: 'hobby',
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
	titlePT?: string;
	type: 'company' | 'academic';
	company: string;
	iconCompany?: string;
	projects?: string;
	subtitle: string[];
	subtitlePT?: string[];
	time: string;
	timePT?: string;
	techs?: Tech[];
}

export const professional: Timeline[] = [
	{
		title: 'SI Consultant',
		titlePT: 'Consultor SI',
		company: 'ITSector',
		type: 'company',
		iconCompany: images.Work.src,
		projects: 'MSE (Millennium BCP Corp)',
		time: 'Apr 2024 - Current ',
		timePT: 'Abr 2024 - Atual ',
		subtitle: [
			'Developed and maintained React and TypeScript code within a micro frontends architecture.',
			'Collaborated with back-end teams and designers to enhance usability and user experience.',
			'Participated in Scrum ceremonies, supporting planning, decision-making, and troubleshooting to drive project progress.',
			'Utilized Azure DevOps for continuous integration.',
		],
		subtitlePT: [
			'Desenvolvimento e manutenção de código em React e TypeScript numa arquitetura de micro frontends.',
			'Colaboração com equipas de back-end e designers para melhorar a usabilidade e a experiência do utilizador.',
			'Participação em cerimónias Scrum, apoiando o planeamento, a tomada de decisões e a resolução de problemas para impulsionar o progresso do projeto.',
			'Utilização do Azure DevOps para integração contínua.',
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
		titlePT: 'Programador SI',
		company: 'ITSector',
		type: 'company',
		iconCompany: images.Work.src,
		projects: 'MSE (Millennium BCP Corp)',
		time: 'Aug 2022 - Apr 2024',
		timePT: 'Ago 2022 - Abr 2024',
		subtitle: [
			'Developed and maintained website of Millennium BCP Corp using React and TypeScript.',
			'Collaborated with back-end teams and designers to improve usability.',
			'Participated in Scrum ceremonies, contributing to project planning, decision-making, and troubleshooting, while working collaboratively with the team to ensure project progress',
		],
		subtitlePT: [
			'Desenvolvimento e manutenção do website corporativo do Millennium BCP utilizando React e TypeScript.',
			'Colaboração com equipas de back-end e designers para melhorar a usabilidade.',
			'Participação em cerimónias Scrum, contribuindo para o planeamento, tomada de decisões e resolução de problemas, trabalhando de forma colaborativa para garantir o progresso do projeto.',
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
		titlePT: 'Engenharia Informática',
		type: 'academic',
		subtitle: ['Completed degree'],
		subtitlePT: ['Licenciatura concluída'],
		time: 'Sep 2019 - Jul 2022',
		timePT: 'Set 2019 - Jul 2022',
		company: 'ISPGaya',
	},
	{
		title: 'Software Developer',
		titlePT: 'Desenvolvedor de Software',
		type: 'academic',
		iconCompany: images.Work.src,
		subtitle: ['Internship'],
		subtitlePT: ['Estágio curricular'],
		time: 'Fev 2022 - Jun 2022',
		timePT: 'Fev 2022 - Jun 2022',
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
	image: string;
	labelPT?: string;
	gitHub?: string;
	liveDemo: string;
	video?: string;
	leftColor: string;
	type: 'personal' | 'company';
	techs?: Tech[];
}

export const cardsData: ProjectProps[] = [
	{
		title: 'MSE - Melhor Site Empresas',
		type: 'company',
		label: " I contributed to the front-end development and architectural design of this project at ITSector, collaborating with a team to build Millennium BCP's corporate platform. ",
		labelPT:
			'Contribuí para o desenvolvimento front-end e design arquitetural deste projeto na ITSector, colaborando com uma equipa para construir a plataforma corporativa do Millennium BCP.',
		headerIcon: images.Millennium.src,
		leftColor: colors.project.leftMSEColor,
		image: images.MSEImage.src,
		isSquared: true,
		liveDemo: 'https://corp.millenniumbcp.pt/',
		video: 'https://bo.millenniumvideos.net/videos/wQgk4w3F2eJfeG0t/MSE-1080.mp4',
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
		title: 'KOLs Dashboard',
		type: 'personal',
		label: 'I worked on the development of the APIs, front-end, and database for this dashboard that analyzes influencer performance and token trends.',
		labelPT:
			'Contribuí para o desenvolvimento das APIs, front-end e base de dados deste dashboard que analisa o desempenho de influenciadores e tendências de tokens.',
		liveDemo: 'https://t.co/Vc47qS8KBl',
		video: 'https://x.com/i/status/1895927366410539045',
		leftColor: colors.project.leftKOLSColor,
		image: images.KOLsImage.src,
		headerIcon: images.TrackerAILogo.src,
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
				title: 'Vite',
				icon: images.ViteLogo.src,
			},
			{
				title: 'GitLab',
				icon: images.GitLabLogo.src,
			},
			{
				title: 'Node',
				icon: images.Node.src,
			},
			{
				title: 'MySQL',
				icon: images.MySQL.src,
			},
		],
	},
	{
		title: 'E-commerce Store',
		type: 'personal',
		label: 'Responsive e-commerce website, featuring profile management, order history, filters, favorites, shopping cart, and purchase transactions.',
		labelPT:
			'Website e-commerce responsivo, com gestão de perfis, histórico de encomendas, filtros, favoritos, carrinho de compras e transações de compra.',
		gitHub: 'https://github.com/BrunoFAC/storeWithNextJs',
		liveDemo: 'https://dummy-store-fake-api.netlify.app/',
		leftColor: colors.project.leftECommerceColor,
		image: images.Store.src,
		headerIcon: images.StoreIcon.src,
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
		image: images.PortfolioImage.src,
		label: 'Built a portfolio from scratch using styled-components for styling.',
		labelPT: 'Criação de um portfólio utilizando styled-components para estilização.',
		gitHub: 'https://github.com/BrunoFAC/brunoportfolio',
		liveDemo: 'https://bruno-carvalho-dev.pt/',
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
