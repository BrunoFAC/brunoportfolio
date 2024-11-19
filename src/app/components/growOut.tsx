import { FC, ReactNode } from "react";
import styled from "styled-components";

const ContainerGrowOut = styled.div<{ $delay?: number; $isVisible: boolean }>`
  width: ${({ $isVisible }) => ($isVisible ? "100%" : 0)};
  transition: opacity ${({ $delay }) => `${$delay ?? 0.6}s`} ease,
    transform ${({ $delay }) => `${$delay ?? 0.6}s`} ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? "scale(1)" : "scale(1.8)")};
`;
export interface GrowOutProps {
  isVisible: boolean;
  children: ReactNode;
  delay?: number;
}
export const GrowOut: FC<GrowOutProps> = ({ isVisible, delay, children }) => {
  return (
    <ContainerGrowOut $delay={delay} $isVisible={isVisible}>
      {children}
    </ContainerGrowOut>
  );
};
