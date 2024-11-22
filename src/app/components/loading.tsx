import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CoffeeHeader = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddcfcc;
  border-radius: 10px;
`;

const CoffeeButton = styled.div<{ position: number }>`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  left: ${({ position }) => position}px;
  background-color: #282323;
  border-radius: 50%;
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: -8px;
    left: calc(50% - 4px);
    background-color: #615e5e;
  }
`;

const CoffeeDisplay = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: #9acfc5;
  border: 5px solid #43beae;
  box-sizing: border-box;
`;

const CoffeeDetails = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`;

const CoffeeMedium = styled.div`
  width: 90%;
  height: 160px;
  position: absolute;
  top: 80px;
  left: calc(50% - 45%);
  background-color: #bcb0af;
  &:before {
    content: "";
    width: 90%;
    height: 100px;
    background-color: #776f6e;
    position: absolute;
    bottom: 0;
    left: calc(50% - 45%);
    border-radius: 20px 20px 0 0;
  }
`;

const CoffeeExit = styled.div`
  width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20;
  &::before {
    content: "";
    width: 50px;
    height: 20px;
    border-radius: 0 0 50% 50%;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 25px);
    background-color: #231f20;
  }
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 5px);
    background-color: #231f20;
  }
`;

const CoffeeCup = styled.div`
  width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #fff;
  border-radius: 0 0 70px 70px / 0 0 110px 110px;
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: -13px;
    border: 5px solid #fff;
    border-radius: 50%;
  }
`;

const CoffeeFooter = styled.div`
  width: 95%;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 47.5%);
  background-color: #41bdad;
  border-radius: 10px;
  &::after {
    content: "";
    width: 106%;
    height: 26px;
    position: absolute;
    bottom: -25px;
    left: -8px;
    background-color: #000;
  }
`;

const LiquidAnimation = keyframes`
  0%, 5% {
    height: 0px;
    opacity: 1;
  }
  20%, 95% {
    height: 62px;
    opacity: 1;
  }
  100% {
    height: 62px;
    opacity: 0;
  }
`;

const CoffeeLiquid = styled.div`
  width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: ${LiquidAnimation} 4s 4s linear infinite;
`;

const SmokeAnimation = keyframes`
  0% {
    bottom: 20px;
    opacity: 0;
  }
  40% {
    bottom: 50px;
    opacity: 0.5;
  }
  80% {
    bottom: 80px;
    opacity: 0.3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
`;

const CoffeeSmoke = styled.div<{ delay: string; position: number }>`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae;
  opacity: 0;
  bottom: 50px;
  left: calc(50% - ${({ position }) => position}px);
  animation: ${SmokeAnimation} 3s ${({ delay }) => delay} linear infinite;
`;
const CoffeeText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  bottom: calc(20% - 100px);
  text-align: center;
  width: 100%;
  z-index: 1;

  animation: bounceIn 1.5s ease, swing 1s ease-in-out 2s infinite;

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Loading: React.FC = () => {
  return (
    <Container>
      <CoffeeHeader>
        <CoffeeButton position={15} />
        <CoffeeButton position={50} />
        <CoffeeDisplay />
        <CoffeeDetails />
      </CoffeeHeader>
      <CoffeeMedium>
        <CoffeeExit />
        <CoffeeLiquid />
        <CoffeeSmoke position={20} delay="0s" />
        <CoffeeSmoke position={-16} delay="0.5s" />
        <CoffeeSmoke position={0} delay="1s" />
        <CoffeeCup />
      </CoffeeMedium>
      <CoffeeFooter />
      <CoffeeText>wait a second... just waking up website</CoffeeText>
    </Container>
  );
};
