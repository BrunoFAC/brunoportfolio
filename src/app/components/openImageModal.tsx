import { useCommonStore } from '@/store';
import { colors, device } from '@/utils';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
const growAndFadeIn = keyframes`
  0% {
    transform: scale(0.8); 
    opacity: 0; 
  }
  100% {
    transform: scale(1); 
    opacity: 1; 
  }
`;

const ModalWrapper = styled.div<{ $isVisible: boolean }>`
	display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
	position: fixed;
	z-index: 5;
	left: 0;
	top: 0;
	width: 100%;
	align-items: center;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	background-size: cover;
	background-position: center;
	overflow: auto;
`;

const ModalImage = styled.img`
	width: 100%;
	border-radius: 16px;
`;

const ModalContent = styled.div<{ $isVisible: boolean }>`
	border: 1px solid ${colors.card.border};
	border-radius: 16px;
	margin: auto;
	@media ${device.tabletM} {
		max-width: calc(100% - 32px);
	}
	@media ${device.laptop} {
		max-width: calc(100% - 32px);
	}
	@media ${device.desktop} {
		max-width: calc(1280px - 32px);
	}
	position: relative;
	display: flex;
	animation: ${growAndFadeIn} 0.3s ease-in-out;
`;

const CloseButton = styled.span`
	color: ${colors.gray.light};
	right: 0;
	position: absolute;
	border-radius: 16px;
	font-size: 20px;
	font-weight: 700;
	margin: 10px 20px 0 0;
	user-select: none;
	cursor: pointer;
	transition: color 0.3s ease;
	&:hover {
		color: ${colors.gray.default};
	}
`;

export const OpenImageModal: FC = () => {
	const imageModal = useCommonStore((store) => store.imageModal);
	const setImageModal = useCommonStore((store) => store.setImageModal);

	const closeModal = () => setImageModal('');

	const handleOutsideClick = (event: React.MouseEvent) => {
		if ((event.target as HTMLElement).id === 'modal') {
			closeModal();
		}
	};

	return (
		<ModalWrapper id="modal" $isVisible={imageModal.length > 0} onClick={handleOutsideClick}>
			<ModalContent $isVisible={imageModal.length > 0}>
				<CloseButton onClick={closeModal}>x</CloseButton>
				<ModalImage src={imageModal} alt={imageModal} />
			</ModalContent>
		</ModalWrapper>
	);
};
