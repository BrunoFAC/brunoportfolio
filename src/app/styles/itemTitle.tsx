import { colors, device } from "@/utils";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const ItemTitleP = styled.p`
  font-weight: 700;
  color: ${colors.white};
  transition: transform 0.3s ease;

  @media ${device.tabletM} {
    font-size: 18px;
  }

  @media ${device.mobileM} {
    font-size: 15px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }

  @media ${device.desktop} {
    font-size: 18px;
  }
`;

interface ItemTitleProps {
  children: ReactNode;
}

export const ItemTitle: FC<ItemTitleProps> = ({ children }) => {
  return <ItemTitleP>{children}</ItemTitleP>;
};
