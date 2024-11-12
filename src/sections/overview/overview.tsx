import styled, { keyframes } from "styled-components";
import { colors } from "@/consts";
import {
  Timeline,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Grow } from "@mui/material";
import { FC, useRef } from "react";
import { useVisibility } from "@/hooks";
import { OverviewViews } from "./views";
import { timeline } from "./types";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 205px);
  @media (max-width: 899px) {
    width: 100%;
  }
  justify-content: start;
  min-height: 100vh;
`;

const TimelineWrapper = styled.div`
  width: 100%;
`;

const pulseAnimation = keyframes`
  100% {
    box-shadow: 0 0 0 5px transparent;
  }
`;

const Pulse = styled.div`
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #1976d2;
  margin: 8px 0;
  box-shadow: 0 0 0 0 #1976d2;
  animation: ${pulseAnimation} 1s infinite;
`;

export const Overview: FC = () => {
  const elementRef = useRef(null);

  const { isVisible } = useVisibility(elementRef);
  const { HeaderOverview, TimelineInsideContent } = OverviewViews;
  const timelineSorted = [...timeline].sort((a, b) => b.order - a.order);

  const isEducation = (order: number) =>
    (timeline.find((e) => e?.type === "Education")?.order ?? 0) >= order;

  return (
    <OverviewContainer>
      <Grow in={isVisible}>
        <OverviewContainer>
          <HeaderOverview />
          <TimelineWrapper ref={elementRef}>
            <Timeline position="alternate">
              {timelineSorted.map((item, index) => (
                <TimelineItem key={`${item.order}-${index}`}>
                  {item?.time && (
                    <TimelineOppositeContent
                      sx={{ m: "auto 0", color: colors.white }}
                      align="right"
                      variant="body2"
                    >
                      {item.time}
                    </TimelineOppositeContent>
                  )}
                  <TimelineSeparator>
                    <TimelineConnector
                      sx={{
                        ...(isEducation(item.order) && {
                          bgcolor: "primary.main",
                        }),
                      }}
                    />
                    {item?.type === "Education" ? (
                      <SchoolRoundedIcon
                        fontSize="large"
                        sx={{ color: "primary.main" }}
                      />
                    ) : (
                      <Pulse />
                    )}
                    <TimelineConnector
                      sx={{
                        ...(isEducation(item.order) && {
                          bgcolor: "primary.main",
                        }),
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      py: "12px",
                      px: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <TimelineInsideContent item={item} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineWrapper>
        </OverviewContainer>
      </Grow>
    </OverviewContainer>
  );
};
