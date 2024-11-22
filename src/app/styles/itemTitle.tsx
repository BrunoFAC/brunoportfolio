import { colors } from "@/global";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const ItemTitleP = styled.p`
  font-weight: 700;
  color: ${colors.white};
  transition: transform 0.3s ease;

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 540px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

interface ItemTitleProps {
  children: ReactNode;
}

export const ItemTitle: FC<ItemTitleProps> = ({ children }) => {
  return <ItemTitleP>{children}</ItemTitleP>;
};
