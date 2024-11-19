import { colors } from "@/global";
import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { IconType } from "./contacts";

const slide = keyframes`
     0% {
      left: -200%;
    }
    100% {
      left: 100%;
    }
`;
const Button = styled.button<{ $type: IconType }>`
  display: flex;
  ${({ $type }) => {
    if ($type === "email") {
      return { width: "100%" };
    }
    return { flex: 1, flexBasis: "50px" };
  }};

  padding: 10px;
  height: min-content;
  align-items: center;
  border: 1px solid ${colors.card.border};
  border-radius: 8px;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
  background: ${colors.gray.dark};
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -200%;
    width: 200%;
    height: 400%;
    background: ${colors.button.bgAnimation};
    transform: rotate(-45deg);
    pointer-events: none;
    animation: ${slide} 4s ease-in-out infinite;
  }

  &:hover {
    border: 1px solid ${colors.button.hovered};
    filter: brightness(1.15);
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  letter-spacing: 0.5px;
  color: ${colors.white};
`;

const InfoIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export interface IconTextButtonProps {
  icon: string;
  text: string;
  url: string;
  type: IconType;
}

export const IconTextButton: FC<IconTextButtonProps> = ({
  icon,
  text,
  type,
  url,
}) => {
  const openLinks = () => {
    switch (type) {
      case "cv":
        const a = document.createElement("a");
        a.href = url;
        a.download = "cv-bruno.pdf";
        a.click();
        break;

      case "email":
        const subject = encodeURIComponent(
          "Proposal for Collaboration on Website/App Development"
        );

        const body = encodeURIComponent(bodyText);

        const mailtoLink = `mailto:${url}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        break;

      case "link":
        window.open(url, "_blank");
        break;
    }
  };
  return (
    <Button onClick={() => openLinks()} $type={type}>
      <InfoIcon src={icon} alt={text} />
      <InfoText>{text}</InfoText>
    </Button>
  );
};

const bodyText = `Hello Bruno,

          I hope you're doing well. My name is [Client's Name] and I am reaching out because I would like to hire you for a web development project.

          Below are the details of my project:

          1. **Project Overview**:  
            [Provide a brief description of the project.]

          2. **Key Requirements**:  
            [List the main features or functionalities the project should include.]

          3. **Budget**:  
            [Provide an estimated budget.]

          4. **Similar Websites/Examples**:  
            [If the client has examples of websites they like, they can include them here.]

          5. **Timeline**:  
            [The ideal timeline.]

          6. **Additional Information**:  
            [Any other relevant information.]

          I would love to discuss more about the project and how we can move forward. Please let me know if you're available for a call or meeting to go over the details.

          Looking forward to hearing from you!

          Best regards,  
          [Client's Name] 
          [Client's Contact Information]
`;
