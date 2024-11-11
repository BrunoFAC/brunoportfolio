import React, { FC } from "react";
import styled from "styled-components";
import { projects, ProjectsViews } from "..";

const Container = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: calc(100% - 205px);
  }
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  position: relative;
  min-height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
interface GridContainerProps {
  itemsCount: number;
}
const ContainerCards = styled.div<GridContainerProps>`
  position: relative;
  ${({ itemsCount }) => {
    if (itemsCount < 3)
      return {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: itemsCount < 2 ? "700px" : "1200px",
      };
    return {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
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
    max-width: 350px;
  }

  color: white;
  gap: 16px;
`;

const TitlePage = styled.h3`
  font-size: 56px;
  margin: 0px 16px;
  @media (max-width: 899px) {
    margin-top: 100px;
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
  const { Cards } = ProjectsViews;
  return (
    <Container>
      <TitlePage>LATEST PROJECTS</TitlePage>
      <SubtitlePage>
        Recent Work Showcasing Skills in Web Development and Design
      </SubtitlePage>
      <ContainerCards itemsCount={projects.length}>
        {projects.map((project, index) => (
          <Cards card={project} key={`${project.title}-${index}`} />
        ))}
      </ContainerCards>
    </Container>
  );
};
