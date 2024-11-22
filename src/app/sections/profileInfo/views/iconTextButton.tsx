import { FC, useMemo } from 'react';
import { StyledButton } from '@/components';
import { IconType } from '@/utils';
import { useCommonStore } from '@/store';

export interface IconTextButtonProps {
	icon: string;
	text: string;
	url: string;
	type: IconType;
}

export const IconTextButton: FC<IconTextButtonProps> = ({ icon, text, type, url }) => {
	const setToast = useCommonStore((store) => store.setToast);

	const openLinks = () => {
		switch (type) {
			case 'cv':
				const a = document.createElement('a');
				a.href = url;
				a.download = 'cv-bruno.pdf';
				a.click();
				break;

			case 'email':
				const subject = encodeURIComponent('Proposal for Collaboration on Website/App Development');

				const body = encodeURIComponent(bodyText);

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

	const width = useMemo(() => {
		if (type === 'email') return '80%';
		return type === 'copy-email' ? '15%' : '50px';
	}, [type]);

	return <StyledButton icon={icon} text={text} width={width} onClick={openLinks} />;
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
