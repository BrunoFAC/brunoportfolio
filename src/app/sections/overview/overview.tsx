import { FC, useEffect, useRef, useState } from "react";
import { Card, GrowOut } from "@/components";
import styled from "styled-components";
import { useVisibility } from "@/hooks";
import { OverviewViews } from "./views";
import { VisibilityProps } from "@/utils";

const Container = styled.div`
  display: flex;
  min-height: 30px;
`;

export const Overview: FC<VisibilityProps> = ({ timer }) => {
  const elementRef = useRef(null);
  const { isVisible } = useVisibility(elementRef, timer);
  const [stopAnimation, setStopAnimation] = useState<boolean>(false);

  useEffect(() => {
    isVisible && !stopAnimation && setStopAnimation(true);
  }, [stopAnimation, isVisible]);
  const { Description, Header } = OverviewViews;

  return (
    <GrowOut isVisible={stopAnimation ? true : isVisible}>
      <Container ref={elementRef}>
        <Card width="100%">
          <Header />
          <Description />
        </Card>
      </Container>
    </GrowOut>
  );
};
