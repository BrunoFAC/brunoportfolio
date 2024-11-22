import { colors, device } from "@/utils";
import { FC, ReactNode } from "react";
import styled from "styled-components";

export const SubtitleP = styled.p<{ $color?: string }>`
  color: ${({ $color }) => $color ?? colors.white};
  font-weight: 600;
  @media ${device.tabletM} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 11px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }

  @media ${device.desktop} {
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
