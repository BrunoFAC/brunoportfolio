import { colors } from "@/global";
import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  @media (max-width: 540px) {
    flex-direction: column;
    gap: 4px;
    align-items: start;
  }
`;

export const HeadSite = styled.img<{ $isSquared?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: ${({ $isSquared }) => ($isSquared ? "4px" : "100%")};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg);
  }
`;

export const ContainerTitleLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 24px;
  opacity: 0.7;

  transform: translateX(40px);

  @media (max-width: 540px) {
    transform: translateX(20px);
  }
  @media (min-width: 1024px) {
    transform: translateX(30px);
  }
  @media (min-width: 1280px) {
    transform: translateX(40px);
  }
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 540px) {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: ${colors.button.hovered};
    transform: rotate(-10deg);
    opacity: 1;
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  color: ${colors.white};
  margin-top: 2px;
  max-width: 600px;
  opacity: 0.7;
  flex: 1;
  gap: 8px;
  transform: translateX(40px);

  @media (max-width: 540px) {
    transform: translateX(20px);
    max-width: 400px;
  }
  @media (min-width: 1024px) {
    transform: translateX(30px);
    max-width: 500px;
  }
  @media (min-width: 1280px) {
    transform: translateX(40px);
    max-width: 600px;
  }
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

export const HighlightBorder = styled.div<{ $leftColor: string }>`
  width: 6px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background: ${({ $leftColor }) => $leftColor};
  transition: width 0.3s ease;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: ${colors.card.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover ${ContainerText} {
    transform: translateX(10px);
    @media (max-width: 540px) {
      transform: translateX(10px);
    }
  }

  &:hover ${HighlightBorder} {
    width: 10px;
  }

  &:hover ${ContainerIcons}, &:hover ${ContainerTechs} {
    transform: translateX(10px);
    @media (max-width: 540px) {
      transform: translateX(10px);
    }
    opacity: 1;
  }
`;

export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 12px;
  padding: 16px 24px;

  @media (max-width: 540px) {
    padding: 12px;
  }
  @media (min-width: 1024px) {
    padding: 16px;
  }
  @media (min-width: 1280px) {
    padding: 16px 24px;
  }
  box-sizing: border-box;
  cursor: pointer;
`;
