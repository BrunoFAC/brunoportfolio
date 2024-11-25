import { colors, device } from '@/utils';
import { FC } from 'react';
import styled from 'styled-components';
import { TextButton } from '@/styles';

const Button = styled.button<{ $isSelected: boolean; $removeBorderRadius?: 'left' | 'right' }>`
  display: flex;
  flex: 1;
  padding: 8px;
  gap: 8px;
  height: min-content;
  align-items: center;
  border: 1px solid ${colors.card.border};
  border-radius: 8px;
 ${({ $removeBorderRadius }) => {
		if ($removeBorderRadius === 'left')
			return {
				borderBottomLeftRadius: 0,
				borderTopLeftRadius: 0,
			};

		if ($removeBorderRadius === 'right')
			return {
				borderBottomRightRadius: 0,
				borderTopRightRadius: 0,
			};
 }}
  justify-content: center;
  flex-direction: row;
  ${({ $isSelected }) => {
		return {
			background: $isSelected ? colors.gray.default : colors.gray.dark,
			...($isSelected && {
				filter: 'brightness(1.15)',
			}),
		};
  }}
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.button.hovered};
    ${({ $isSelected }) => {
		return {
			filter: $isSelected ? '' : 'brightness(1.15)',
		};
	}}
`;

const InfoIcon = styled.img`
	width: 24px;
	height: 16px;
	border-radius: 4px;
	@media ${device.mobileM} {
		width: 13px;
		height: 13px;
	}
`;

export interface SimpleButtonBaseProps {
	removeBorderRadius?: 'left' | 'right';
	isSelected: boolean;
	onClick: () => void;
}

type SimpleButtonProps = SimpleButtonBaseProps &
	({ icon: string; text?: string } | { icon?: string; text: string } | { icon: string; text: string });

export const SimpleButton: FC<SimpleButtonProps> = ({ icon, isSelected, removeBorderRadius, text, onClick }) => {
	return (
		<Button $removeBorderRadius={removeBorderRadius} $isSelected={isSelected} onClick={onClick}>
			{icon && <InfoIcon src={icon} alt={text} />}
			{text && (
				<TextButton isButton isSelected={isSelected}>
					{text}
				</TextButton>
			)}
		</Button>
	);
};
