import { Subtitle, Title, Highlight, Pulse } from "@/components";
import { colors } from "@/global";
import { images } from "@/images";
import { FC } from "react";
import styled from "styled-components";

const ContainerAvatar = styled.div`
  display: flex;
  height: min-content;
  gap: 16px;
  justify-content: flex-start;
  flex-direction: row;
`;

const Avatar = styled.div<{ $image: string; $hoveredImage: string }>`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out, background-image 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-image: url(${({ $hoveredImage }) => $hoveredImage});
    transform: rotate(-5deg);
  }
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;

const ContainerWork = styled.div`
  display: flex;
  background: ${colors.secondary};
  padding: 0px 8px;
  border-radius: 16px;
  cursor: pointer;
  width: fit-content;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${colors.gray.dark};
  }
`;

const WorkSpan = styled.p`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 10px;
`;

export const Header: FC = () => {
  return (
    <ContainerAvatar>
      <Avatar
        $image={images.Avatar.src}
        $hoveredImage={images.SippingCoffee.src}
      />
      <ContainerText>
        <ContainerWork>
          <Pulse width={8} />
          <WorkSpan>Available as Freelancer</WorkSpan>
        </ContainerWork>
        <Title color={colors.primary}>Bruno Carvalho</Title>
        <Subtitle>
          {`I'm a `}
          <Highlight>Web Developer</Highlight>
        </Subtitle>
      </ContainerText>
    </ContainerAvatar>
  );
};