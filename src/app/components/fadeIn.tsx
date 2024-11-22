import { FC, ReactNode } from "react";
import styled from "styled-components";

const ContainerFadeIn = styled.div<{ $isVisible: boolean }>`
  transition: opacity 0.6s ease;
  display: flex;
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;
export interface FadeInProps {
  isVisible: boolean;
  children: ReactNode;
}
export const FadeIn: FC<FadeInProps> = ({ isVisible, children }) => {
  return <ContainerFadeIn $isVisible={isVisible}>{children}</ContainerFadeIn>;
};
