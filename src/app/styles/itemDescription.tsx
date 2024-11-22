import { colors, device } from "@/utils";
import { FC, ReactNode } from "react";
import styled from "styled-components";
export type FontWeight = 400 | 500 | 600 | 700;

const ItemDescriptionP = styled.span<{
  $fontWeight: FontWeight;
  $color?: string;
}>`
  color: ${({ $color }) => $color ?? colors.gray.light};
  word-break: break-word;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  transition: transform 0.3s ease;

  @media ${device.tabletM} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    display: flex;
    gap: 4px;
    flex-flow: wrap;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }

  @media ${device.desktop} {
    font-size: 14px;
    max-width: 500px;
  }
`;

interface ItemDescriptionProps {
  children: ReactNode;
  fontWeight?: FontWeight;
  color?: string;
}

export const ItemDescription: FC<ItemDescriptionProps> = ({
  children,
  fontWeight = 500,
  color,
}) => {
  return (
    <ItemDescriptionP $color={color} $fontWeight={fontWeight}>
      {children}
    </ItemDescriptionP>
  );
};
