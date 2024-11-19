import { FC } from "react";
import { HeaderWrapper, Highlight, Subtitle, Title } from "@/components";

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
