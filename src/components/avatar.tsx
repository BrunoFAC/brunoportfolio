import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { images } from "@/images";

const animateBorderRadius = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
`;

// Styled component for the Blob (Avatar)
const Blob = styled.div`
  background-image: url("${images.Avatar.src}");
  background-size: cover;
  background-position: center center;
  min-width: 350px;
  height: 350px;
  animation: ${animateBorderRadius} 5s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @media only screen and (max-width: 1399px) {
    min-width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 1199px) {
    min-width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 899px) {
    min-width: 200px;
    height: 200px;
  }
`;

export const Avatar: FC = () => {
  return <Blob />;
};
