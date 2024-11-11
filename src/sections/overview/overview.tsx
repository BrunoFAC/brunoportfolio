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
import { Box, Grow } from "@mui/material";
import "./overview.css";
import { FC, useRef } from "react";
import { timeline } from ".";
import { useVisibility } from "@/hooks";

export const Overview: FC = () => {
  const elementRef = useRef(null);

  const { isVisible } = useVisibility(elementRef);

  const timelineSorted = [...timeline].sort((a, b) => b.order - a.order);

  const isEducation = (order: number) =>
    (timeline.find((e) => e?.type === "Education")?.order ?? 0) >= order;

  return (
    <div className="overview">
      <Grow in={isVisible}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span className="title">OVERVIEW</span>
            <span className="subtitle-timeline">
              Key Career Highlights and Educational Path
            </span>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
            ref={elementRef}
          >
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
                      <div className="pulse"></div>
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
                    <span className="title-timeline">{item.title}</span>
                    {item?.subtitle && (
                      <span className="subtitle-timeline">
                        {item?.subtitle}
                      </span>
                    )}
                    {item?.underSubtitle && (
                      <span className="under-subtitle-timeline">
                        {item?.underSubtitle}
                      </span>
                    )}
                    {item?.projects && (
                      <span className="projects">
                        Projects: <b>{item?.projects}</b>
                      </span>
                    )}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Box>
      </Grow>
    </div>
  );
};
