import { images } from "@/images";
import { FC } from "react";
import styled from "styled-components";
import { InfoViews } from "../views";
const Container = styled.div`
  display: flex;
  height: min-content;
  justify-content: space-between;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export interface IconsWithTooltipProps {
  image: string;
  text: string;
}
export type IconType = "email" | "link" | "cv";
export interface InfoArray {
  icon: string;
  text: string;
  url: string;
  type: IconType;
}

export const Contacts: FC = () => {
  const infoArray: InfoArray[] = [
    {
      icon: images.Email.src,
      text: "Contact Me",
      type: "email",
      url: "brunoalmeida15032001@gmail.com",
    },

    {
      icon: images.LinkedIn.src,
      text: "LinkedIn",
      type: "link",
      url: "https://www.linkedin.com/in/bruno-almeida07/",
    },
    {
      icon: images.Github.src,
      text: "GitHub",
      type: "link",
      url: "https://github.com/BrunoFAC",
    },
    {
      icon: images.Download.src,
      text: "Resume",
      type: "cv",
      url: "/assets/cv-bruno.pdf",
    },
  ];
  const { IconTextButton } = InfoViews;
  return (
    <Container>
      {infoArray.map((e, key) => (
        <IconTextButton
          icon={e.icon}
          text={e.text}
          type={e.type}
          url={e.url}
          key={`${e.text}-${key}`}
        />
      ))}
    </Container>
  );
};
