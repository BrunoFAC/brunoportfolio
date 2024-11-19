import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const TitleP = styled.p<{ $color?: string }>`
  color: ${({ $color }) => $color ?? colors.white};
  font-weight: 700;
  font-size: 24px;
`;

interface TitleProps {
  children: ReactNode;
  color?: string;
}

export const Title: FC<TitleProps> = ({ color, children }) => {
  return <TitleP $color={color}>{children}</TitleP>;
};
