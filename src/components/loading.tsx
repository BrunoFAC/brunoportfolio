import { FC, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframes para rotação da animação do loader
const arrowSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Keyframes para o efeito de saída (subir)
const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

// Contêiner de sobreposição de tela cheia com animação condicional de saída e gradiente
const FullScreenLoader = styled.div<{ animateOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #1a3343 10%, #312235);
  z-index: 9999;
  overflow: hidden; // Previne o scroll enquanto o loader está visível

  ${({ animateOut }) =>
    animateOut &&
    css`
      animation: ${slideUp} 0.6s forwards;
    `}
`;

// Contêiner do loader
const LoaderContainer = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${arrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
`;

// Estilos para as partes do loader
const RotatingCircle = styled.div`
  position: absolute;
  top: 17.5%;
  left: 17.5%;
  width: 65%;
  height: 65%;
  border-radius: 50%;
  animation: ${arrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
`;

const Straight = styled(RotatingCircle)`
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 15%;
    border-bottom: 3px solid #eee;
    transform: rotate(45deg);
  }
  &:before {
    top: 5px;
    left: 5px;
  }
  &:after {
    bottom: 5px;
    right: 5px;
  }
`;

const Curve = styled(RotatingCircle)`
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 45px;
    height: 10px;
    border: solid 3px transparent;
    border-top-color: #eee;
    border-radius: 50%/10px 10px 0 0;
  }
  &:before {
    transform: rotate(-63deg) translateX(-27px) translateY(-4px);
  }
  &:after {
    bottom: 5px;
    right: 5px;
    transform: rotate(115deg) translateX(-26px) translateY(-12px);
  }
`;

const Center = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  border: 3px solid #eee;
`;

const Inner = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  animation: ${arrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite
    reverse;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-width: 11px;
    border-bottom-color: #eee;
  }

  &:before {
    top: 12px;
    left: 12px;
    transform: rotate(128deg);
  }

  &:after {
    bottom: 12px;
    right: 12px;
    transform: rotate(-48deg);
  }
`;

export const Loading: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  useEffect(() => {
    // Bloqueia o scroll da página ao mostrar o loader
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restabelece o scroll após o loader desaparecer
    }

    return () => {
      document.body.style.overflow = ""; // Limpa o estilo ao desmontar
    };
  }, [isVisible]);

  useEffect(() => {
    // Inicia o timer para animação de saída após 3 segundos
    const timer = setTimeout(() => {
      setAnimateOut(true); // Inicia animação de saída
      setTimeout(() => setIsVisible(false), 600); // Tempo adicional para terminar a animação
    }, 3000); // Exibe o loader por 3 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  // Retorna null caso o loader não esteja mais visível
  if (!isVisible) return null;

  return (
    <FullScreenLoader animateOut={animateOut}>
      <LoaderContainer>
        <Straight />
        <Curve />
        <Center />
        <Inner />
      </LoaderContainer>
    </FullScreenLoader>
  );
};
