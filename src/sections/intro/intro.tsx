import { Avatar, Apresentation } from "@/components";
import { useVisibility } from "@/hooks";
import { Fade } from "@mui/material";
import { FC, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    width: calc(100% - 205px);
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 899px) {
    justify-content: start;
    flex-direction: column;
    margin: 150px 16px 0;
  }
`;

const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAvatar = styled.div`
  width: min-content;
  height: auto;
  display: flex;
  align-items: center;
`;

const StyledApresentation = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
  }

  @media (max-width: 899px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    height: auto;
  }
  @media (max-width: 540px) {
    padding: 16px;
  }
`;

export const Intro: FC = () => {
  const elementRef = useRef(null);

  const { isVisible } = useVisibility(elementRef);

  return (
    <Container>
      <Fade in={isVisible}>
        <AboutMeWrapper ref={elementRef}>
          <StyledAvatar>
            <Avatar />
          </StyledAvatar>
          <StyledApresentation>
            <Apresentation />
          </StyledApresentation>
        </AboutMeWrapper>
      </Fade>
    </Container>
  );
};
