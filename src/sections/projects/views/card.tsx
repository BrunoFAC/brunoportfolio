import React, { FC, useState } from "react";
import styled from "styled-components";
import { Tooltip, Zoom } from "@mui/material";
import { ProjectsProps } from "@/sections";

const ContainerImage = styled.div`
  height: 300px;
  width: 100%;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  z-index: 1;
  transform: translateY(50px);
  transition: transform 0.5s, background 0.5s;
  @media (max-width: 540px) {
    max-height: 200px;
  }
`;

const ContainerOverlayCardImage = styled.div`
  height: 100%;
  background: black;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  border-radius: 8px;
  opacity: 0.5;
  transition: opacity 0.5s;
  position: absolute;
`;

const TitleOverlay = styled.h3`
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  transition: transform 0.5s, opacity 0.5s;
  @media (max-width: 540px) {
    font-size: 1em;
  }
`;

const TitleDescription = styled.h3`
  margin: 0px;
  font-size: 1.5em;
  @media (max-width: 540px) {
    font-size: 1em;
  }
`;

const ImageCard = styled.img`
  position: absolute;
  height: 300px;
  border-radius: 8px;
  width: -webkit-fill-available;
  @media (max-width: 540px) {
    max-height: 200px;
  }
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: translateY(-240px);
  transition: transform 0.5s;
  background: linear-gradient(90deg, #1a3343 10%, #312235);
  gap: 8px;
  @media (max-width: 540px) {
    transform: translateY(-140px);
  }
`;

const DescriptionContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  @media (max-width: 540px) {
    font-size: 1em;
  }
`;

const Icons = styled.div`
  padding: 4px;
  display: flex;
  justify-content: start;
  width: min-content;
  height: min-content;
  z-index: 1;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 100%;
  &:hover {
    background-color: #ffffff3b;
  }
`;
const ImageIcons = styled.img`
  width: 32px;
  height: 32px;
  @media (max-width: 540px) {
    width: 20px;
    height: 20px;
  }
`;

const Description = styled.p`
  margin: 0;
  @media (max-width: 540px) {
    font-size: 0.75em;
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0px 16px;
  transition: 0.5s ease-in;

  &:hover ${ContainerImage} {
    transform: translateY(0);
    border-radius: 8px 8px 0px 0px;
  }
  &:hover ${TitleOverlay} {
    transform: translateY(60px);
    opacity: 0;
  }
  &:hover ${ContainerOverlayCardImage} {
    opacity: 0.2;
    border-radius: 8px 8px 0px 0px;
  }
  &:hover ${ContainerDescription} {
    transform: translateY(0);
    border-radius: 0px 0px 8px 8px;
  }
  &:hover ${ImageCard} {
    border-radius: 8px 8px 0px 0px;
  }
`;

interface CardsProps {
  card: ProjectsProps;
}
export const Cards: FC<CardsProps> = ({ card }) => {
  const openLinks = (link: string) => {
    window.open(link, "_blank");
  };
  const { description, icons, image, imageHovered, title } = card;

  const [isHoveredCard, setIsHoveredCard] = useState<boolean>(false);
  return (
    <Card
      onMouseEnter={() => setIsHoveredCard(true)}
      onMouseLeave={() => setIsHoveredCard(false)}
    >
      <ContainerImage>
        <ImageCard src={isHoveredCard ? imageHovered : image} alt={"store"} />
        <ContainerOverlayCardImage>
          <TitleOverlay>{title}</TitleOverlay>
        </ContainerOverlayCardImage>
      </ContainerImage>
      <ContainerDescription>
        <TitleDescription>{title}</TitleDescription>
        <DescriptionContainerIcons>
          {icons.map((e, index) => (
            <Tooltip
              key={`${e.title}-${index}`}
              title={e.title}
              TransitionComponent={Zoom}
            >
              <Icons onClick={() => openLinks(e.link)}>
                <ImageIcons src={e.src.src} alt={e.alt} />
              </Icons>
            </Tooltip>
          ))}
        </DescriptionContainerIcons>
        <Description>{description}</Description>
      </ContainerDescription>
    </Card>
  );
};
