import { FC } from "react";
import styled from "styled-components";
import { colors, Timeline } from "@/global";
import { HighlightBox, Pulse } from "@/components";
import { ItemDescription, ItemTitle } from "@/styles";

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
  margin-bottom: ${({ $isLast }) => ($isLast ? "5px" : "25px")};
`;

const Connect = styled.span`
  display: flex;
  width: 1px;
  min-height: 20px;
  height: 100%;
  background: ${colors.card.border};
`;

const ContainerPositionLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  color: ${colors.gray.light};
  gap: 4px;
`;
const ContainerTechs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  color: ${colors.gray.light};
  margin-top: 2px;
  gap: 8px;
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
        <ItemTitle>{title}</ItemTitle>
        <ContainerPositionLocation>
          <ItemDescription>{time}</ItemDescription>
          <ItemDescription fontWeight={600}>· {company}</ItemDescription>
        </ContainerPositionLocation>
        {subtitle && <ItemDescription>{subtitle}</ItemDescription>}
        {projects && (
          <ItemDescription>
            <ItemDescription color={colors.white} fontWeight={700}>
              Projects:
            </ItemDescription>
            {` ${projects}`}
          </ItemDescription>
        )}
        {techs && (
          <ContainerTechs>
            {[...techs]
              //reorder for text length
              .sort((a, b) => b.title.length - a.title.length)
              ?.map((e, key) => (
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
