"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  color: #fff;
`;
const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
  z-index: -1;
`;

const H2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 748px) {
    font-size: 2.5rem;
  }
`;
const P = styled.p`
  font-size: 1rem;
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
  //border: none;

  width: 10rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #fff;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #ffffff;
  }
  &::before {
    top: 100%;
    left: 1px;
    height: 2px;
    width: 1px;
  }
  &::after {
    left: 100%;
    top: 1px;
    height: 1px;
    width: 2px;
  }

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

const PreIntro = () => {
  return (
    <Div>
      <Wrapper>
        <Img src="/6.webp" width={2000} height={2000} alt="image" />
        <Layer />
        <H2 className="ds-font">OLUWADARA & AYOMIDE</H2>
        <P>NOVEMBER 8TH & 9TH 2024</P>
        <Link href="#show">
          <Btn>VIEW GALLERY</Btn>
        </Link>
        <Logo src="/logod.svg" width={2000} height={2000} alt="logo" />
      </Wrapper>
    </Div>
  );
};

export default PreIntro;
