import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

export const TitleP = styled.p<{ $color?: string }>`
  color: ${({ $color }) => $color ?? colors.white};
  font-weight: 700;
  font-size: 24px;
  @media (max-width: 1023px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

interface TitleProps {
  children: ReactNode;
  color?: string;
}

export const Title: FC<TitleProps> = ({ color, children }) => {
  return <TitleP $color={color}>{children}</TitleP>;
};
