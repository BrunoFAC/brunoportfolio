import React, { FC, useState } from "react";
import styled from "styled-components";
import { Tooltip, Zoom } from "@mui/material";
import { GridContainerProps, projects, ProjectsProps } from "../types";
import { colors } from "@/consts";

const ContainerImage = styled.div<GridContainerProps>`
  height: ${({ $itemsCount }) => {
    return $itemsCount < 2 ? "350px" : "300px";
  }};
  width: 100%;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  z-index: 1;
  transform: ${({ $itemsCount }) => {
    return $itemsCount > 2 ? "translateY(0px)" : "translateY(50px)";
  }};
  @media (max-width: 1399px) {
    transform: translateY(0px);
  }
  transition: transform 0.5s, background 0.5s;
  @media (max-width: 540px) {
    max-height: 200px;
  }
`;

const CardImage = styled.img<GridContainerProps>`
  position: absolute;
  height: ${({ $itemsCount }) => {
    return $itemsCount < 2 ? "350px" : "300px";
  }};
  border-radius: 8px;
  width: -webkit-fill-available;
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

const TitleOverlayCardImage = styled.h3`
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

const ContainerDescriptionIcons = styled.div`
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
    background-color: ${colors.hoverIcons};
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
  transition: height 0.5s ease-in;

  height: 300px;
  &:hover {
    height: 500px;
  }

  @media (max-width: 540px) {
    height: 200px;
    &:hover {
      height: 360px;
    }
  }
  &:hover ${ContainerImage} {
    transform: translateY(0);
    border-radius: 8px 8px 0px 0px;
  }
  &:hover ${TitleOverlayCardImage} {
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
  &:hover ${CardImage} {
    border-radius: 8px 8px 0px 0px;
  }
`;

export interface CardsProps {
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
      <ContainerImage $itemsCount={projects.length}>
        <CardImage
          $itemsCount={projects.length}
          src={isHoveredCard ? imageHovered : image}
          alt={"store"}
        />
        <ContainerOverlayCardImage>
          <TitleOverlayCardImage>{title}</TitleOverlayCardImage>
        </ContainerOverlayCardImage>
      </ContainerImage>
      <ContainerDescription>
        <TitleDescription>{title}</TitleDescription>
        <ContainerDescriptionIcons>
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
        </ContainerDescriptionIcons>
        <Description>{description}</Description>
      </ContainerDescription>
    </Card>
  );
};
