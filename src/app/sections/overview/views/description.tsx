import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "@/global";
import { OverviewViews, Timeline } from "../views";
import { GrowOut } from "@/components";
import { images } from "@/images";

const Container = styled.div`
  display: flex;
  background: ${colors.card.background};
  flex-direction: column;
  margin: 0px 24px 24px;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
`;

const ContainerButton = styled.div`
  display: flex;
  height: min-content;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
`;

const reveal = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const ContainerDesription = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  animation: ${reveal} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

const Button = styled.button<{ $isSelected: boolean }>`
  display: flex;
  flex: 1;
  flex-basis: 50px;
  padding: 8px;
  height: min-content;
  align-items: center;
  border: 1px solid ${colors.card.border};
  border-radius: 8px; 
 
  justify-content: center;
  flex-direction: row;
  ${({ $isSelected }) => {
    return {
      background: $isSelected ? colors.gray.default : colors.gray.dark,
      ...($isSelected && {
        filter: "brightness(1.15)",
      }),
    };
  }}
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.button.hovered};
    ${({ $isSelected }) => {
      return {
        filter: $isSelected ? "" : "brightness(1.15)",
      };
    }}
`;

const Text = styled.p<{ $isSelected?: boolean }>`
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  letter-spacing: 0.5px;
  color: ${({ $isSelected }) =>
    $isSelected ? colors.white : colors.button.hovered};
`;

export const Description: FC = () => {
  const [overview, setOverview] = useState<"professional" | "academic">(
    "professional"
  );
  const isAcademic = overview === "academic";
  const isProfessional = overview === "professional";

  const { Roles } = OverviewViews;

  const professional: Timeline[] = [
    {
      title: "SI Consultant",
      company: "ITSector",
      projects: "MSE (Millennium BCP Corp)",
      time: "Apr 2024 - Current ",
      techs: [
        {
          title: "React",
          icon: images.React.src,
        },
        {
          title: "Typescript",
          icon: images.Typescript.src,
        },
        {
          title: "Zustand",
          icon: images.Zustand.src,
        },
      ],
    },
    {
      title: "SI Programmer",
      company: "ITSector",
      projects: "MSE (Millennium BCP Corp)",
      time: "Aug 2022 - Apr 2024",
      techs: [
        {
          title: "React",
          icon: images.React.src,
        },
        {
          title: "Typescript",
          icon: images.Typescript.src,
        },
        {
          title: "Zustand",
          icon: images.Zustand.src,
        },
      ],
    },
  ];

  const academic: Timeline[] = [
    {
      title: "Computer Engineering",
      subtitle: "Completed degree",
      time: "Sep 2019 - Jul 2022",
      company: "ISPGaya",
    },
    {
      title: "Software Developer",
      subtitle: "Internship",
      time: "Fev 2022 - Jun 2022",
      company: "ITSector",
    },
  ];
  return (
    <Container>
      <ContainerButton>
        <Button
          $isSelected={isProfessional}
          onClick={() => setOverview("professional")}
        >
          <Text $isSelected={isProfessional}>Professional</Text>
        </Button>
        <Button
          $isSelected={isAcademic}
          onClick={() => setOverview("academic")}
        >
          <Text $isSelected={isAcademic}>Academic</Text>
        </Button>
      </ContainerButton>
      {isProfessional && (
        <ContainerDesription>
          <GrowOut isVisible={isProfessional}>
            {professional.map((e, key) => (
              <Roles
                key={`${key}-${e.title}`}
                roles={e}
                isLast={key === professional.length - 1}
              />
            ))}
          </GrowOut>
        </ContainerDesription>
      )}
      {isAcademic && (
        <ContainerDesription>
          {academic.map((e, key) => (
            <Roles
              key={`${key}-${e.title}`}
              roles={e}
              isLast={key === academic.length - 1}
            />
          ))}
        </ContainerDesription>
      )}
    </Container>
  );
};
