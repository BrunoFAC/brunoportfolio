"use client";
import { Stepper, TriggerOnScroll } from "@/components";
import { Box } from "@mui/material";
import "./page.css";
import { useState, useRef, useCallback } from "react";
import { AboutMe, Overview, Projects } from "@/sections";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stepper goTo={scrollToSection} activeStep={activeId} />

        <section
          ref={(element) => {
            sectionsRef.current[0] = element;
          }}
          id="0"
        >
          <AboutMe />
        </section>

        <section
          ref={(element) => {
            sectionsRef.current[1] = element;
          }}
          id="1"
        >
          <Overview />
        </section>
        <section
          ref={(element) => {
            sectionsRef.current[2] = element;
          }}
          id="2"
        >
          <Projects />
        </section>
        <section
          ref={(element) => {
            sectionsRef.current[3] = element;
          }}
          id="3"
        >
          <AboutMe />
        </section>
      </Box>
    </TriggerOnScroll>
  );
}
