import { colors } from "@/global";
import { images } from "@/images";
import { Title } from "@/styles";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    backdrop-filter: blur(10px);
    top: 0;
    width: 100%;
    height: 80px;
    background: ${colors.card.background};
    position: sticky;
    z-index: 2;
    border-bottom: 1px solid ${colors.card.border};
    box-shadow: 0px 0px 11px 0px ${colors.black};
    flex-direction: row;
    border-bottom-right-radius: 16px;
    justify-content: center;
    animation: ${reveal} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
`;

const InsideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1023px) {
    gap: 16px;
    margin: 0px 16px;
  }
`;

const Apresentation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;

const Header = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const HeaderNavBar: FC = () => {
  return (
    <Container>
      <InsideContainer>
        <Apresentation>
          <Header src={images.SiteHeader.src} />
          <Title>Bruno Portfolio</Title>
        </Apresentation>
      </InsideContainer>
    </Container>
  );
};
