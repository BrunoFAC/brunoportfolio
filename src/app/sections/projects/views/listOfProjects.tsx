import { cardsData, colors } from "@/global";
import styled from "styled-components";
import { ProjectsViews } from "../views";
import { FC } from "react";

const ContainerProjects = styled.div`
  background: ${colors.card.background};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 24px 24px;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  height: 100%;
  position: relative;
  gap: 20px;
`;

export const ListOfProjects: FC = () => {
  return (
    <ContainerProjects>
      {cardsData.map((card, index) => {
        return (
          <ProjectsViews.CardProject
            key={`${card.title}-${index}`}
            card={card}
          />
        );
      })}
    </ContainerProjects>
  );
};
