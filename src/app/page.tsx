"use client";
import { Loading, Stepper, TriggerOnScroll } from "@/components";
import "./page.css";
import { useState, useRef, useCallback } from "react";
import { Intro, Overview, Projects } from "@/sections";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section``;

export default function Home() {
  const [activeId, setActiveId] = useState<string>("0");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <TriggerOnScroll sectionsRef={sectionsRef} setActiveId={setActiveId}>
      <Loading />
      <Container>
        <Stepper goTo={scrollToSection} activeStep={activeId} />
        <Section
          ref={(element) => {
            sectionsRef.current[0] = element;
          }}
          id="0"
        >
          <Intro />
        </Section>

        <Section
          ref={(element) => {
            sectionsRef.current[1] = element;
          }}
          id="1"
        >
          <Overview />
        </Section>
        <Section
          ref={(element) => {
            sectionsRef.current[2] = element;
          }}
          id="2"
        >
          <Projects />
        </Section>
        <Section
          ref={(element) => {
            sectionsRef.current[3] = element;
          }}
          id="3"
        >
          <Intro />
        </Section>
      </Container>
    </TriggerOnScroll>
  );
}
