import { colors } from "@/global";
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

  @media (max-width: 1023px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
    display: flex;
    gap: 4px;
    flex-flow: wrap;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }

  @media (min-width: 1280px) {
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
