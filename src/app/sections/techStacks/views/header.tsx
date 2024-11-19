import { FC } from "react";
import { Title, Subtitle, HeaderWrapper, Highlight } from "@/components";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Title>Tech Stacks</Title>
      <Subtitle>
        The <Highlight>primary technologies</Highlight> I currently work with
      </Subtitle>
    </HeaderWrapper>
  );
};
