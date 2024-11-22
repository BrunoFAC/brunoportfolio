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

export const IdiomAndTheme: FC = () => {
  const { IconTextButton } = InfoViews;
  return (
    <Container>
      <IconTextButton
        icon={"e.icon"}
        text={"e.text"}
        type={"cv"}
        url={"e.url"}
        key={"`${e.text}-${key}`"}
      />
    </Container>
  );
};
