"use client";
import { FC, useEffect, useState } from "react";
import "./typewriter.css";

interface TypewriterProps {
  text: string[];
  speed?: number;
  suffix?: string;
  pause?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
  text,
  suffix,
  speed = 100,
  pause = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleDeleting = () => {
    if (index === 0) {
      setId((prev) => {
        if (prev + 1 === text.length) return 0;
        return prev + 1;
      });
      setTimeout(() => setIsDeleting(false), pause);
    } else {
      setDisplayedText(text[id].substring(0, index - 1));
      setIndex(index - 1);
    }
  };

  const handleTyping = () => {
    if (index < text[id].length) {
      setDisplayedText(text[id].substring(0, index + 1));
      setIndex(index + 1);
    } else {
      setTimeout(() => setIsDeleting(true), pause);
    }
  };

  useEffect(() => {
    const typingSpeed = isDeleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      isDeleting ? handleDeleting() : handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text[0], speed, pause]);

  return (
    <span className="typewritter">
      {`${suffix ? suffix + " " : ""}${displayedText}`}
    </span>
  );
};
