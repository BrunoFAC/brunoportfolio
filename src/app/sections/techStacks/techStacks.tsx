import { FC, useEffect, useRef, useState } from "react";
import { Card, GrowOut } from "@/components";
import styled from "styled-components";
import { useVisibility } from "@/hooks";
import { TechStacksViews } from "./views";
import { VisibilityProps } from "@/global";

const Container = styled.div`
  display: flex;
`;

export const TechStacks: FC<VisibilityProps> = ({ timer }) => {
  const elementRef = useRef(null);
  const { isVisible } = useVisibility(elementRef, timer);
  const [stopAnimation, setStopAnimation] = useState<boolean>(false);
  const { Header, Techs } = TechStacksViews;

  useEffect(() => {
    isVisible && !stopAnimation && setStopAnimation(true);
  }, [stopAnimation, isVisible]);

  return (
    <GrowOut isVisible={stopAnimation ? true : isVisible}>
      <Container ref={elementRef}>
        <Card width="100%">
          <Header />
          <Techs />
        </Card>
      </Container>
    </GrowOut>
  );
};
