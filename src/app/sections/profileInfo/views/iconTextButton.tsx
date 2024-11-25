import { FC, useMemo } from 'react';
import { StyledButton } from '@/components';
import { IconType } from '@/utils';
import { useContacts } from '@/hooks';

export interface IconTextButtonProps {
	icon: string;
	text: string;
	url: string;
	type: IconType;
}

export const IconTextButton: FC<IconTextButtonProps> = ({ icon, text, type, url }) => {
	const { openLinks } = useContacts();

	const width = useMemo(() => {
		if (type === 'email') return '80%';
		return type === 'copy-email' ? '15%' : '50px';
	}, [type]);

	return <StyledButton icon={icon} text={text} width={width} onClick={() => openLinks({ type, url })} />;
};
