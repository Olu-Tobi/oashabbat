"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";

const Div = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

// Keyframe animation for scaling
const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

// Keyframe animation for sliding
const slideAnimation = keyframes`
  0% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
`;

// Keyframe animation for button coming out

const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: transform 1s ease;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      animation: ${scaleAnimation} 1s ease forwards;
      z-index: -1;
    `}
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000070;
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
  }

  @media screen and (max-width: 748px) {
    width: 90%;
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
  text-align: center;
  width: 70%;
  position: relative;
  color: #fff;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const H1 = styled.h1`
  font-size: 4.3rem;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 748px) {
    font-size: 2.3rem;
  }
`;

const P = styled.p`
  text-align: center;
  color: #fff;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  width: 10rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #fff;
  font-family: inherit;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 11rem;
    height: 3rem;
  }

  @media screen and (max-width: 748px) {
    width: 12rem;
    height: 3.2rem;
  }
`;

const Logo = styled(Image)`
  width: 3.3rem;
  height: 3.3rem;
  position: absolute;
  bottom: 2rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const NewIntro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component load
    setIsLoaded(true);
    setIsVisible(true); // Set visibility after the component mounts
  }, []);

  return (
    <Div>
      <Img
        src="/5.webp"
        width={2000}
        height={2000}
        alt="image"
        isLoaded={isLoaded}
      />
      <Layer />
      <Wrapper>
        <Heading isVisible={isVisible}>
          <Header className="ds-font">
            <H1>Join Us in Celebrating Our Love</H1>
          </Header>
          <P>We are so excited to share our special day with you!</P>
        </Heading>
        <Link href="#celebrate">
          <Btn isVisible={isVisible}>Celebrate with Us</Btn>
        </Link>
      </Wrapper>
    </Div>
  );
};

export default NewIntro;
