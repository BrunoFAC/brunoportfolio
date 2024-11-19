"use client";
import { ProfileInfo, TechStacks, Overview, Projects } from "@/sections";
import "./page.css";
import { FC } from "react";
import styled from "styled-components";
import { Background } from "@/components";

const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1023px) {
    gap: 16px;
    margin: 60px 16px 16px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
    margin: 40px 16px 16px;
    height: 100%;
    justify-content: start;
    display: flex;
    gap: 12px;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    height: 100%;
    gap: 16px;
  }
`;

const ContainerProfile = styled.div`
  height: 100%;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 40%;
    display: flex;
    top: 40px;
    flex-direction: column;
    gap: 16px;
    position: sticky;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  @media (min-width: 1024px) {
    width: 60%;
    gap: 12px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

const Home: FC = () => {
  return (
    <Page>
      <Background />
      <Container>
        <ContainerProfile>
          <ProfileInfo timer={0} />
          <TechStacks timer={500} />
        </ContainerProfile>
        <ContainerInfo>
          <Overview timer={750} />
          <Projects timer={1000} />
        </ContainerInfo>
      </Container>
    </Page>
  );
};

export default Home;
