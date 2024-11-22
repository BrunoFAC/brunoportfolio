import { FC, useState } from "react";
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

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;

const IconWork = styled.img`
  width: 16px;
  height: 16px;
  @media (max-width: 540px) {
    width: 13px;
    height: 13px;
  }
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

const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ContainerDetailsLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
`;

const IconSeeDetails = styled.p<{ $seeMoreDetails: boolean }>`
  color: ${colors.white};
  transition: transform 0.4s ease;
  font-size: 15px;
  transform: ${({ $seeMoreDetails }) =>
    $seeMoreDetails
      ? "rotate(-90deg) translateX(-2px)"
      : "rotate(90deg) translateX(1px)"};
  display: inline-block;
`;

const ContainerDescriptionDetails = styled.div`
  color: ${colors.white};
`;

const AccordionContent = styled.div<{ $expanded: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ $expanded }) => ($expanded ? "500px" : "0px")};
  display: flex;
  flex-direction: column;
`;

export interface RolesProps {
  roles: Timeline;
  isLast: boolean;
}

export const Roles: FC<RolesProps> = ({ roles, isLast }) => {
  const [seeMoreDetails, setSeeMoreDetails] = useState<boolean>(false);
  const { company, time, iconCompany, type, title, projects, subtitle, techs } =
    roles;
  return (
    <Container>
      <ContainerPulse>
        <Pulse width={10} />
        <Connect />
      </ContainerPulse>
      <ContainerPosition $isLast={isLast}>
        <ContainerTitle>
          {iconCompany && <IconWork src={iconCompany} alt={iconCompany} />}
          <ItemTitle>{title}</ItemTitle>
        </ContainerTitle>
        <ContainerPositionLocation>
          <ItemDescription fontWeight={600}>{company}</ItemDescription>
          <ItemDescription>· {time}</ItemDescription>
        </ContainerPositionLocation>
        {projects && (
          <ItemDescription>
            <ItemDescription color={colors.white} fontWeight={700}>
              Projects:
            </ItemDescription>
            {` ${projects}`}
          </ItemDescription>
        )}
        <ContainerDetails>
          {subtitle.length > 1 && (
            <ContainerDetailsLink
              onClick={() => setSeeMoreDetails(!seeMoreDetails)}
            >
              <ItemDescription fontWeight={600} color={colors.white}>
                {seeMoreDetails ? "Hide details" : "See details"}
              </ItemDescription>
              <IconSeeDetails $seeMoreDetails={seeMoreDetails}>
                {">"}
              </IconSeeDetails>
            </ContainerDetailsLink>
          )}
          {type === "academic" ? (
            subtitle.map((e, key) => (
              <ItemDescription key={`${e}-${key}`}>· {e}</ItemDescription>
            ))
          ) : (
            <AccordionContent $expanded={seeMoreDetails}>
              {subtitle.map((e, key) => (
                <ContainerDescriptionDetails key={`${e}-${key}`}>
                  <ItemDescription>· {e}</ItemDescription>
                </ContainerDescriptionDetails>
              ))}
            </AccordionContent>
          )}
        </ContainerDetails>

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
