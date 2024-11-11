import { FC } from "react";
import { colors } from "@/consts";
import { Typewriter } from "@/components";
import "./apresentation.css";

export const Apresentation: FC = () => {
  const typewritterText = [
    "a Web Developer.",
    "passionate about Front-End Development.",
    "a Computer Engineer.",
  ];

  return (
    <div className="typewritter">
      <span className="welcoming">
        {`Welcome! I'm `}
        <span style={{ color: colors.blue }}>Bruno</span> and,
      </span>
      <Typewriter suffix={"I am"} text={typewritterText} />
    </div>
  );
};
