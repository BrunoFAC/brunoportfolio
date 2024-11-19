import { FC } from "react";
import styled from "styled-components";
import { colors } from "@/global";
import { HighlightBox, Pulse } from "@/components";
import { Timeline } from "../views";

const Container = styled.div`
  display: flex;
  padding-left: 6px;
  gap: 16px;
`;

const ContainerPulse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerPosition = styled.div<{ $isLast: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4px;
  margin-bottom: ${({ $isLast }) => ($isLast ? "0px" : "25px")};
`;

const Connect = styled.span`
  display: flex;
  width: 1px;
  min-height: 20px;
  height: 100%;
  background: ${colors.card.border};
`;

const PositionTitle = styled.p`
  color: ${colors.white};
  font-weight: 700;
  font-size: 18px;
`;
const ContainerPositionLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.gray.light};
  gap: 4px;
`;
const ContainerTechs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.gray.light};
  margin-top: 2px;
  gap: 8px;
`;

const PositionTime = styled.p`
  font-weight: 500;
  font-size: 14px;
`;
const PositionCompany = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const PositionDescription = styled.p`
  color: ${colors.gray.light};
  word-break: break-word;
  font-weight: 500;
  font-size: 14px;
`;

const ProjectsTitle = styled.span`
  font-weight: 700;
  color: ${colors.white};
`;

const ProjectsDescription = styled.div`
  color: ${colors.gray.light};
  display: flex;
  flex-direction: row;
  word-break: break-word;
  font-weight: 400;
  font-size: 14px;
  gap: 4px;
`;

export interface RolesProps {
  roles: Timeline;
  isLast: boolean;
}

export const Roles: FC<RolesProps> = ({ roles, isLast }) => {
  const { company, time, title, projects, subtitle, techs } = roles;
  return (
    <Container>
      <ContainerPulse>
        <Pulse width={10} />
        <Connect />
      </ContainerPulse>
      <ContainerPosition $isLast={isLast}>
        <PositionTitle>{title}</PositionTitle>
        <ContainerPositionLocation>
          <PositionTime>{time}</PositionTime>
          <PositionCompany>· {company}</PositionCompany>
        </ContainerPositionLocation>
        {subtitle && <PositionDescription>{subtitle}</PositionDescription>}
        {projects && (
          <ProjectsDescription>
            <ProjectsTitle>Projects: </ProjectsTitle> {projects}
          </ProjectsDescription>
        )}
        {techs && (
          <ContainerTechs>
            {techs?.map((e, key) => (
              <HighlightBox
                key={`${e.title}-${key}`}
                icon={e.icon}
                text={e.title}
              />
            ))}
          </ContainerTechs>
        )}
      </ContainerPosition>
    </Container>
  );
};
