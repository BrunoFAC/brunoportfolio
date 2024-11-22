import { FC } from "react";
import { HeaderWrapper } from "@/components";
import { Title, Subtitle, Highlight } from "@/styles";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Title>Overview</Title>
      <Subtitle>
        My <Highlight>Professional</Highlight> Experience
        {" and "}
        <Highlight>Academic</Highlight> Background
      </Subtitle>
    </HeaderWrapper>
  );
};
