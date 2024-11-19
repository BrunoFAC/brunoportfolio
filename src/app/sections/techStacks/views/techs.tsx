import { FC } from "react";
import styled from "styled-components";
import { colors } from "@/global";
import { images } from "@/images";

const ContainerTechs = styled.div`
  padding: 0px 24px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
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
const TechTile = styled.p`
  color: ${colors.white};
  font-weight: 600;
  font-size: 14px;
`;

const TechSubtile = styled.p`
  color: ${colors.gray.light};
  font-weight: 500;
  font-size: 10px;
`;

interface TechsProps {
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
  url: string;
}

export const Techs: FC = () => {
  const techs: TechsProps[] = [
    {
      title: "React",
      subtitle: "Javascript Library",
      image: images.React.src,
      backgroundColor: colors.techs.react,
      url: "https://react.dev/",
    },
    {
      title: "Typescript",
      subtitle: "Javascript but better",
      image: images.Typescript.src,
      backgroundColor: colors.techs.typescript,
      url: "https://www.typescriptlang.org/",
    },
    {
      title: "Next",
      subtitle: "React Framework",
      image: images.Next.src,
      backgroundColor: colors.techs.next,
      url: "https://nextjs.org/",
    },
    {
      title: "Azure DevOps",
      subtitle: "Code Management",
      image: images.DevOps.src,
      backgroundColor: colors.techs.devops,
      url: "https://azure.microsoft.com/pt-pt/pricing/purchase-options/azure-account?icid=azure-devops",
    },
    {
      title: "Git",
      subtitle: "Version Control",
      image: images.Git.src,
      backgroundColor: colors.techs.git,
      url: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      subtitle: "Code Management",
      image: images.Github.src,
      backgroundColor: colors.techs.github,
      url: "https://github.com/",
    },
    {
      title: "Zustand",
      subtitle: "Store Management",
      image: images.Zustand.src,
      backgroundColor: colors.techs.zustand,
      url: "https://zustand-demo.pmnd.rs/",
    },
  ];

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
            <TechTile>{e.title}</TechTile>
            <TechSubtile>{e.subtitle}</TechSubtile>
          </ContainerText>
        </TechStack>
      ))}
    </ContainerTechs>
  );
};
