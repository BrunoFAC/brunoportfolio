import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import { academic, colors, professional } from "@/global";
import { OverviewViews } from "../views";
import { TextButton } from "@/styles";

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

export const Description: FC = () => {
  const [overview, setOverview] = useState<"professional" | "academic">(
    "professional"
  );
  const isAcademic = overview === "academic";
  const isProfessional = overview === "professional";

  const { Roles } = OverviewViews;

  return (
    <Container>
      <ContainerButton>
        <Button
          $isSelected={isProfessional}
          onClick={() => setOverview("professional")}
        >
          <TextButton isButton isSelected={isProfessional}>
            Professional
          </TextButton>
        </Button>
        <Button
          $isSelected={isAcademic}
          onClick={() => setOverview("academic")}
        >
          <TextButton isButton isSelected={isAcademic}>
            Academic
          </TextButton>
        </Button>
      </ContainerButton>
      {isProfessional && (
        <ContainerDesription>
          {professional.map((e, key) => (
            <Roles
              key={`${key}-${e.title}`}
              roles={e}
              isLast={key === professional.length - 1}
            />
          ))}
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
