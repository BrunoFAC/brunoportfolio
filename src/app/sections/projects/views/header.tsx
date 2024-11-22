import { HeaderWrapper } from "@/components";
import { Title, Subtitle, Highlight } from "@/styles";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Title>Projects</Title>
      <Subtitle>
        My <Highlight>Professional</Highlight> and{" "}
        <Highlight>Personal</Highlight> Projects
      </Subtitle>
    </HeaderWrapper>
  );
};
