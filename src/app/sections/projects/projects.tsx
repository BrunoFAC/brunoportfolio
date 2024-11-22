import { Card, GrowOut } from "@/components";
import { VisibilityProps } from "@/utils";
import { useVisibility } from "@/hooks";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProjectsViews } from "./views";

const Container = styled.div`
  display: flex;
  min-height: 30px;
`;

export const Projects: FC<VisibilityProps> = ({ timer }) => {
  const elementRef = useRef(null);
  const { isVisible } = useVisibility(elementRef, timer);
  const [stopAnimation, setStopAnimation] = useState<boolean>(false);

  useEffect(() => {
    isVisible && !stopAnimation && setStopAnimation(true);
  }, [stopAnimation, isVisible]);

  const { Header, ListOfProjects } = ProjectsViews;
  return (
    <GrowOut isVisible={stopAnimation ? true : isVisible}>
      <Container ref={elementRef}>
        <Card width="100%">
          <Header />
          <ListOfProjects />
        </Card>
      </Container>
    </GrowOut>
  );
};
