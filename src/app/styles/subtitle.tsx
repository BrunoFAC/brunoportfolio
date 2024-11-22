import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

export const SubtitleP = styled.p<{ $color?: string }>`
  color: ${({ $color }) => $color ?? colors.white};
  font-weight: 600;
  @media (max-width: 1023px) {
    font-size: 13px;
  }
  @media (max-width: 540px) {
    font-size: 11px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }

  @media (min-width: 1280px) {
    font-size: 13px;
  }
`;

interface SubtitleProps {
  children: ReactNode;
  color?: string;
}

export const Subtitle: FC<SubtitleProps> = ({ color, children }) => {
  return <SubtitleP $color={color}>{children}</SubtitleP>;
};
