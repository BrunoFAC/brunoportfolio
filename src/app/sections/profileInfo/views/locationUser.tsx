import { colors } from "@/global";
import { images } from "@/images";
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

const LocationText = styled.p`
  color: ${colors.white};
  font-size: 14px;
`;

export const LocationUser: FC = () => {
  return (
    <LocationContainer>
      <Pin src={images.Pin.src} alt="pin-icon" />
      <LocationText>Santa Maria da Feira, Aveiro </LocationText>
    </LocationContainer>
  );
};
