import { FC, ReactNode } from "react";
import styled from "styled-components";

const ContainerFadeOut = styled.div<{ $isVisible: boolean }>`
  transition: opacity 0.6s ease, transform 0.6s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 0 : 1)};
`;
export interface FadeOutProps {
  isVisible: boolean;
  children: ReactNode;
}
export const FadeOut: FC<FadeOutProps> = ({ isVisible, children }) => {
  return <ContainerFadeOut $isVisible={isVisible}>{children}</ContainerFadeOut>;
};
