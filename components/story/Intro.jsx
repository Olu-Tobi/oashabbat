"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";

// Styled components
const Div = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 70vh;
  }
  @media screen and (max-width: 748px) {
    height: 100vh;
  }
`;

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const slideAnimation = keyframes`
  0% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 -400px;
  z-index: -1;
  transition: transform 1s ease;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      animation: ${scaleAnimation} 1s ease forwards;
      z-index: -1;
    `}

  @media screen and (max-width: 1024px) {
    object-position: unset;
  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #00000040;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    gap: 4rem;
    width: 90%;
  }

  @media screen and (max-width: 748px) {
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${slideAnimation} 1s ease forwards;
    `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  color: #fff;

  @media screen and (max-width: 1024px) {
  }
`;

const H1 = styled.h1`
  font-size: 4.3rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 748px) {
    font-size: 2.3rem;
  }
`;

const StoryImg = styled(Image)`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;

const P = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
`;

const P2 = styled.p`
  text-align: center;
  width: 60%;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  z-index: 999;
  color: white;
  font-size: 2rem;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Hide loading once image is loaded
    setIsVisible(true); // First set isVisible to true
  };

  // Use useEffect to set isLoaded after isVisible is true
  useEffect(() => {
    if (isVisible) {
      setIsLoaded(true); // Set isLoaded to true right after isVisible
    }
  }, [isVisible]);

  return (
    <Div>
      <LoadingOverlay isLoading={isLoading} />
      <Img
        src="/preWedding/pro1.jpg"
        width={2000}
        height={2000}
        alt="image"
        isLoaded={isLoaded}
        onLoad={handleImageLoad}
        priority
      />
      <Layer />
      {!isLoading && (
        <Wrapper>
          <Heading isVisible={isVisible}>
            <Header>
              <P>THE STORY OF</P>
              <StoryImg
                src="/elements.png"
                width={800}
                height={800}
                alt="element"
              />
              <H1>Oluwadara & Ayomide</H1>
            </Header>
            <P2>
              “the most beautiful relationships begin with a
              simple, obedient call”
            </P2>
          </Heading>
        </Wrapper>
      )}
    </Div>
  );
};

export default Intro;
