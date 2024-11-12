import styled from "styled-components";
import { FC } from "react";
import { colors } from "@/consts";

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 899px) {
    margin-top: 100px;
  }
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.span`
  color: ${colors.white};
  font-size: 56px;
  font-weight: bold;
`;

const SubtitleTimeline = styled.span`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
`;

export const HeaderOverview: FC = () => {
  return (
    <Header>
      <Title>OVERVIEW</Title>
      <SubtitleTimeline>
        Key Career Highlights and Educational Path
      </SubtitleTimeline>
    </Header>
  );
};
