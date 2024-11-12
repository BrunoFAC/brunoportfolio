import styled from "styled-components";
import { FC } from "react";
import { TimelineProps } from "../types";
import { colors } from "@/consts";

const SubtitleTimeline = styled.span`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
`;

const TitleTimeline = styled.span`
  color: ${colors.white};
  font-size: 32px;
  font-weight: bold;
`;

const UnderSubtitleTimeline = styled.span`
  font-size: 12px;
  color: ${colors.white};
  font-weight: 300;
  max-width: 300px;
`;

const Projects = styled.span`
  font-size: 12px;
  color: ${colors.white};
  font-weight: 300;
`;

export interface TimelineInsideContentProps {
  item: TimelineProps;
}
export const TimelineInsideContent: FC<TimelineInsideContentProps> = ({
  item,
}) => {
  return (
    <>
      <TitleTimeline>{item.title}</TitleTimeline>
      {item?.subtitle && <SubtitleTimeline>{item?.subtitle}</SubtitleTimeline>}
      {item?.underSubtitle && (
        <UnderSubtitleTimeline>{item?.underSubtitle}</UnderSubtitleTimeline>
      )}
      {item?.projects && (
        <Projects>
          Projects: <b>{item?.projects}</b>
        </Projects>
      )}
    </>
  );
};
