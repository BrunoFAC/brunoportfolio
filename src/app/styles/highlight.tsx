import { colors } from "@/utils";
import { FC, ReactNode } from "react";
import styled from "styled-components";
const HighlightSpan = styled.span`
  color: ${colors.primary};
`;
interface HighlightProps {
  children: ReactNode;
}
export const Highlight: FC<HighlightProps> = ({ children }) => {
  return <HighlightSpan>{children}</HighlightSpan>;
};
