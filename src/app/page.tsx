"use client";
import { ProfileInfo, TechStacks, Overview, Projects } from "@/sections";
import "./page.css";
import { FC } from "react";
import styled from "styled-components";
import { Background } from "@/components";
import { colors } from "@/global";

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.black};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 16px;
  @media (max-width: 1023px) {
    gap: 16px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    width: calc(100% - 32px);
    height: 100%;
    justify-content: start;
    display: flex;
    gap: 16px;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    width: calc(100% - 32px);
    height: 100%;
    gap: 16px;
  }
`;

const ContainerProfile = styled.div`
  height: 100%;
  flex-direction: column;
  @media (max-width: 1023px) {
    gap: 16px;
    display: flex;
    justify-content: center;
    margin: 16px 16px 0px 16px;
  }

  @media (min-width: 1024px) {
    width: 45%;
    display: flex;
    top: 40px;
    gap: 16px;
    position: sticky;
  }
  @media (min-width: 1280px) {
    width: 40%;
    display: flex;
    top: 60px;
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
    margin: 0 16px 16px;
  }
  @media (min-width: 1024px) {
    width: 55%;
    display: flex;
    margin: 40px 0 16px;
    gap: 16px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    margin: 60px 0 16px;
    width: 60%;
    gap: 16px;
  }
`;

const Home: FC = () => {
  return (
    <Page>
      <Background />
      {/* <HeaderNavBar /> */}
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
