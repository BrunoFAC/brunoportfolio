import { FC } from "react";
import { colors } from "@/consts";
import { Typewriter } from "@/components";
import styled from "styled-components";

const typewritterText = [
  "a Front-End Developer.",
  "passionate about Web Development.",
  "a Computer Engineer.",
];

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const Welcome = styled.div`
  font-size: 56px;
  color: ${colors.white};
  width: 100%;
  @media only screen and (max-width: 1399px) {
    font-size: 56px;
  }
  @media only screen and (max-width: 1199px) {
    font-size: 47px;
  }
  @media only screen and (max-width: 999px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 899px) {
    font-size: 56px;
  }
`;

const Name = styled.span`
  color: ${colors.blue};
`;

export const Apresentation: FC = () => {
  return (
    <Container>
      <Welcome>
        {`Welcome! I'm `}
        <Name>Bruno</Name> and,
      </Welcome>
      <Typewriter suffix={"I am"} text={typewritterText} />
    </Container>
  );
};
