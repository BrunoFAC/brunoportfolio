import { FC } from "react";
import styled from "styled-components";
import { colors, device, techs } from "@/utils";
import { ItemDescription } from "@/styles";

const ContainerTechs = styled.div`
  padding: 0px 24px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TechStack = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  color: ${colors.gray.light};
  background: ${colors.gray.dark};
  padding: 8px;
  height: min-content;
  border-radius: 8px;
  transition: 0.2s ease-in;
  &:hover {
    background: ${colors.gray.default};
    transform: rotate(-2deg);
  }
`;

const TechImage = styled.img<{ $backgroundColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const TechSubtile = styled.p`
  color: ${colors.gray.light};
  font-weight: 500;
  font-size: 10px;
`;

export const Techs: FC = () => {
  const openLinks = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <ContainerTechs>
      {techs.map((e, index) => (
        <TechStack onClick={() => openLinks(e.url)} key={`${index}-${e.title}`}>
          <TechImage
            $backgroundColor={e.backgroundColor}
            src={e.image}
            alt={e.title}
          />
          <ContainerText>
            <ItemDescription color={colors.white} fontWeight={600}>
              {e.title}
            </ItemDescription>
            <TechSubtile>{e.subtitle}</TechSubtile>
          </ContainerText>
        </TechStack>
      ))}
    </ContainerTechs>
  );
};
