import { FC, ReactNode } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  height: min-content;
  gap: 4px;
  justify-content: flex-start;
  flex-direction: column;
  margin: 24px 24px 16px;
`;

interface HeaderProps {
  children: ReactNode;
}

export const HeaderWrapper: FC<HeaderProps> = ({ children }) => {
  return <Header>{children}</Header>;
};
