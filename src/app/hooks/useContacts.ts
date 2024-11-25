import { IconType, useResources } from '@/utils';
import { useCommonStore } from '@/store';

export interface ContactsProps {
	url: string;
	type: IconType;
}

export const useContacts = () => {
	const resources = useResources();
	const language = useCommonStore((store) => store.language);
	const setToast = useCommonStore((store) => store.setToast);

	const openLinks = (contact: ContactsProps) => {
		const { type, url } = contact;
		switch (type) {
			case 'cv':
				const a = document.createElement('a');
				a.href = url;
				a.download = 'cv-bruno.pdf';
				a.click();
				break;

			case 'email':
				const subject = encodeURIComponent(resources.profileInfo.iconTextButton.subject);
				const body = encodeURIComponent(language === 'en' ? bodyText : bodyTextPT);

				const mailtoLink = `mailto:${url}?subject=${subject}&body=${body}`;
				window.location.href = mailtoLink;
				break;

			case 'link':
				window.open(url, '_blank');
				break;
			case 'copy-email':
				navigator.clipboard.writeText(url);
				setToast('visible');
				break;
		}
	};
	return { openLinks };
};

const bodyText = `Hello Bruno,

          I hope you're doing well. My name is [Client's Name] and I am reaching out because I would like to hire you for a web development project.

          Below are the details of my project:

          1. **Project Overview**:  
            [Provide a brief description of the project.]

          2. **Key Requirements**:  
            [List the main features or functionalities the project should include.]

          3. **Budget**:  
            [Provide an estimated budget.]

          4. **Similar Websites/Examples**:  
            [If the client has examples of websites they like, they can include them here.]

          5. **Timeline**:  
            [The ideal timeline.]

          6. **Additional Information**:  
            [Any other relevant information.]

          I would love to discuss more about the project and how we can move forward. Please let me know if you're available for a call or meeting to go over the details.

          Looking forward to hearing from you!

          Best regards,  
          [Client's Name] 
          [Client's Contact Information]
`;
const bodyTextPT = `Olá Bruno,

Espero que esteja tudo bem contigo. O meu nome é [Nome do Cliente] e estou a entrar em contacto porque gostaria de te contratar para um projeto de desenvolvimento web.

Abaixo estão os detalhes do meu projeto:

1. **Descrição Geral do Projeto**:  
  [Fornecer uma breve descrição do projeto.]

2. **Principais Requisitos**:  
  [Listar as funcionalidades ou características principais que o projeto deve incluir.]

3. **Orçamento**:  
  [Fornecer um orçamento estimado.]

4. **Websites/Exemplos Semelhantes**:  
  [Se o cliente tiver exemplos de websites que goste, pode incluí-los aqui.]

5. **Cronograma**:  
  [O cronograma ideal.]

6. **Informações Adicionais**:  
  [Qualquer outra informação relevante.]

Gostaria muito de discutir mais sobre o projeto e como podemos avançar. Por favor, avisa-me se estiveres disponível para uma chamada ou reunião para revermos os detalhes.

Fico a aguardar a tua resposta!

Cumprimentos,  
[Nome do Cliente]  
[Informações de Contacto do Cliente]
`;
