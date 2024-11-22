import { colors } from "@/utils";
import { images } from "@/images";
import { ItemDescription } from "@/styles";
import { FC } from "react";
import styled from "styled-components";

const Pin = styled.img`
  width: 18px;
  height: 18px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const LocationUser: FC = () => {
  return (
    <LocationContainer>
      <Pin src={images.Pin.src} alt="pin-icon" />
      <ItemDescription fontWeight={400} color={colors.white}>
        Santa Maria da Feira, Aveiro
      </ItemDescription>
    </LocationContainer>
  );
};
