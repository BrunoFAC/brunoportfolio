import React, { FC, useRef } from "react";
import styled from "styled-components";
import { ProjectsViews } from "./views";
import { GridContainerProps, projects } from "./types";
import { colors } from "@/consts";
import { useVisibility } from "@/hooks";
import { Fade } from "@mui/material";

const Container = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: calc(100% - 205px);
  }
  position: relative;
  min-height: 100vh;
  display: flex;
  color: ${colors.white};
  margin-top: 100px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

const ContainerCards = styled.div<GridContainerProps>`
  position: relative;
  ${({ $itemsCount }) => {
    if ($itemsCount < 3)
      return {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: $itemsCount < 2 ? "700px" : "1200px",
      };
    return {
      display: "grid",
      maxWidth: "1200px",
      gridTemplateColumns: "repeat(2, 1fr)",
      width: "100%",
    };
  }};

  @media (max-width: 1399px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
  }

  @media (max-width: 540px) {
    max-width: 400px;
  }

  color: ${colors.white};
  gap: 16px;
`;

const TitlePage = styled.h3`
  font-size: 56px;
  margin: 0px 16px;
  @media (max-width: 899px) {
    text-align: center;
  }
`;

const SubtitlePage = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0px 16px;
  @media (max-width: 899px) {
    text-align: center;
  }
  margin: 0px;
`;

export const Projects: FC = () => {
  const elementRef = useRef(null);
  const { isVisible } = useVisibility(elementRef);
  const { Cards } = ProjectsViews;
  return (
    <Fade in={isVisible}>
      <Container ref={elementRef}>
        <TitlePage>LATEST PROJECTS</TitlePage>

        <SubtitlePage>
          Recent Work Showcasing Skills in Web Development and Design
        </SubtitlePage>
        <ContainerCards $itemsCount={projects.length}>
          {projects.map((project, index) => (
            <Cards card={project} key={`${project.title}-${index}`} />
          ))}
        </ContainerCards>
      </Container>
    </Fade>
  );
};
