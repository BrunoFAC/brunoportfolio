import { useCommonStore } from '@/store';

export const useResources = () => {
	const language = useCommonStore((store) => store.language);
	return language === 'en' ? resourcesEN : resourcesPT;
};

export const resourcesEN = {
	alert: 'E-mail copied to clipboard!',
	loading: 'wait a second... just waking up website',
	footer: 'Bruno C. © All rights reserved.',
	language: 'Choose Language',
	navbar: `Bruno's Portfolio`,
	sidebar: { contacts: 'Contacts' },
	overview: {
		description: {
			roles: {
				projects: 'Projects:',
				hideDetails: 'Hide details',
				seeDetails: 'See details',
				professional: [
					{
						title: 'SI Consultant',
						company: 'ITSector',
						time: 'Apr 2024 - Current ',
						subtitle: {
							first: 'Developed and maintained React and TypeScript code within a micro frontends architecture.',
							second: 'Collaborated with back-end teams and designers to enhance usability and user experience.',
							third: 'Participated in Scrum ceremonies, supporting planning, decision-making, and troubleshooting to drive project progress.',
							fourth: 'Utilized Azure DevOps for continuous integration.',
						},
					},
					{
						title: 'SI Programmer',
						company: 'ITSector',
						time: 'Aug 2022 - Apr 2024',
						subtitle: {
							first: 'Developed and maintained website of Millennium BCP Corp using React and TypeScript.',
							second: 'Collaborated with back-end teams and designers to improve usability.',
							third: 'Participated in Scrum ceremonies, contributing to project planning, decision-making, and troubleshooting, while working collaboratively with the team to ensure project progress',
						},
					},
				],
				academic: [
					{
						title: 'Computer Engineering',
						type: 'academic',
						subtitle: 'Completed degree',
						time: 'Sep 2019 - Jul 2022',
						company: 'ISPGaya',
					},
					{
						title: 'Software Developer',
						type: 'academic',
						subtitle: 'Internship',
						time: 'Fev 2022 - Jun 2022',
						company: 'ITSector',
					},
				],
			},
			professional: 'Professional',
			academic: 'Academic',
		},
		header: {
			title: 'Overview',
			subtitle: {
				my: 'My',
				professional: 'Professional',
				experience: 'Experience',
				and: ' and ',
				academic: 'Academic',
				background: 'Background',
			},
		},
	},
	profileInfo: {
		header: {
			freelancer: 'Freelancer',
			iAm: `I'm a `,
		},
		iconTextButton: {
			subject: 'Proposal for Collaboration on Website/App Development',
		},
		profileHighlights: {
			freelancer: 'Freelancer',
			years: 'Years',
			language: 'Portuguese & English',
			coffeeAddict: 'Coffee Addict',
			age: 'y/o',
		},
		contacts: {
			email: 'Contact Me',
			resume: 'Resume',
		},
	},
	projects: {
		header: {
			title: 'Projects',
			subtitle: {
				my: 'My',
				professional: 'Professional',
				and: ' and ',
				personal: 'Personal',
				projects: 'Projects',
			},
		},
		listOfProjects: {
			card: {
				typeOfProject: {
					personal: 'Personal Project',
					company: 'Company Project: ITSector',
				},
				first: {
					label: "I contributed to the front-end development and architectural design of this project at ITSector, collaborating with a team to build Millennium BCP's corporate platform. ",
				},
				second: {
					label: 'Responsive e-commerce website, featuring profile management, order history, filters, favorites, shopping cart, and purchase transactions.',
				},
				third: {
					label: 'Built a portfolio from scratch using styled-components for styling.',
				},
			},
		},
	},
	techStacks: {
		title: 'Tech Stacks',
		subtitle: {
			the: 'The',
			primaryTechnologies: 'primary technologies',
			currentlyWorkWith: 'I currently work with',
		},
		techs: {
			react: {
				subtitle: 'Javascript Library',
			},
			typescript: {
				subtitle: 'Javascript but better',
			},
			next: {
				subtitle: 'React Framework',
			},
			devOps: {
				subtitle: 'Code Management',
			},
			git: {
				subtitle: 'Version Control',
			},
			github: {
				subtitle: 'Code Management',
			},
			zustand: {
				subtitle: 'Store Management',
			},
		},
	},
};

export const resourcesPT = {
	alert: 'E-mail copiado para a área de transferência!',
	loading: 'Aguarde um momento... só a despertar o site',
	footer: 'Bruno C. © Todos os direitos reservados',
	language: 'Escolha a linguagem',
	navbar: 'Bruno Portfolio',
	sidebar: { contacts: 'Contactos' },
	overview: {
		description: {
			roles: {
				projects: 'Projetos:',
				hideDetails: 'Esconder detalhes',
				seeDetails: 'Ver detalhes',
				professional: [
					{
						title: 'Consultor de Sistemas de Informação',
						company: 'ITSector',
						time: 'Abr 2024 - Atual ',
						subtitle: {
							first: 'Desenvolvimento e manutenção de código em React e TypeScript numa arquitetura de micro frontends.',
							second: 'Colaboração com equipas de back-end e designers para melhorar a usabilidade e a experiência do utilizador.',
							third: 'Participação em cerimónias Scrum, apoiando o planeamento, a tomada de decisões e a resolução de problemas para impulsionar o progresso do projeto.',
							fourth: 'Utilização do Azure DevOps para integração contínua.',
						},
					},
					{
						title: 'Programador de Sistemas de Informação',
						company: 'ITSector',
						time: 'Ago 2022 - Abr 2024',
						subtitle: {
							first: 'Desenvolvimento e manutenção do website corporativo do Millennium BCP utilizando React e TypeScript.',
							second: 'Colaboração com equipas de back-end e designers para melhorar a usabilidade.',
							third: 'Participação em cerimónias Scrum, contribuindo para o planeamento, tomada de decisões e resolução de problemas, trabalhando de forma colaborativa para garantir o progresso do projeto.',
						},
					},
				],
				academic: [
					{
						title: 'Engenharia Informática',
						type: 'academic',
						subtitle: 'Licenciatura concluída',
						time: 'Set 2019 - Jul 2022',
						company: 'ISPGaya',
					},
					{
						title: 'Desenvolvedor de Software',
						type: 'academic',
						subtitle: 'Estágio curricular',
						time: 'Fev 2022 - Jun 2022',
						company: 'ITSector',
					},
				],
			},
			professional: 'Profissional',
			academic: 'Académico',
		},
		header: {
			title: 'Resumo',
			subtitle: {
				my: 'O meu',
				professional: 'Percurso Profissional',
				experience: 'Experiência',
				and: ' e ',
				academic: 'Académica',
				background: 'Formação',
			},
		},
	},
	profileInfo: {
		header: {
			freelancer: 'Freelancer',
			iAm: `Sou `,
		},
		iconTextButton: {
			subject: 'Proposta de Colaboração para Desenvolvimento de Website/App',
		},
		profileHighlights: {
			freelancer: 'Freelancer',
			years: 'Anos',
			language: 'Português & Inglês',
			coffeeAddict: 'Viciado em Café',
			age: 'anos',
		},
		contacts: {
			email: 'Contacte-me',
			resume: 'Currículo',
		},
	},
	projects: {
		header: {
			title: 'Projetos',
			subtitle: {
				my: 'Os meus',
				professional: 'Profissionais',
				and: ' e ',
				personal: 'Pessoais',
				projects: 'Projetos',
			},
		},
		listOfProjects: {
			card: {
				typeOfProject: {
					personal: 'Projeto Pessoal',
					company: 'Projeto Empresarial: ITSector',
				},
				first: {
					label: 'Contribuí para o desenvolvimento front-end e design arquitetural deste projeto na ITSector, colaborando com uma equipa para construir a plataforma corporativa do Millennium BCP.',
				},
				second: {
					label: 'Website e-commerce responsivo, com gestão de perfis, histórico de encomendas, filtros, favoritos, carrinho de compras e transações de compra.',
				},
				third: {
					label: 'Criação de um portfólio do zero utilizando styled-components para estilização.',
				},
			},
		},
	},
	techStacks: {
		title: 'Tecnologias',
		subtitle: {
			the: 'As',
			primaryTechnologies: 'principais tecnologias',
			currentlyWorkWith: 'com que trabalho atualmente',
		},
		techs: {
			react: {
				subtitle: 'Biblioteca Javascript',
			},
			typescript: {
				subtitle: 'Javascript melhorado',
			},
			next: {
				subtitle: 'Framework React',
			},
			devOps: {
				subtitle: 'Gestão de Código',
			},
			git: {
				subtitle: 'Controlo de Versões',
			},
			github: {
				subtitle: 'Gestão de Código',
			},
			zustand: {
				subtitle: 'Gestão de Estados',
			},
		},
	},
};
