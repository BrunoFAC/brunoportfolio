import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const SubtitleP = styled.p<{ $color?: string }>`
  color: ${({ $color }) => $color ?? colors.white};
  font-weight: 600;
  font-size: 13px;
`;

interface SubtitleProps {
  children: ReactNode;
  color?: string;
}

export const Subtitle: FC<SubtitleProps> = ({ color, children }) => {
  return <SubtitleP $color={color}>{children}</SubtitleP>;
};
