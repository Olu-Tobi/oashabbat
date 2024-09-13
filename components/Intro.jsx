"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div`
  position: relative;

  height: 90vh;
  @media screen and (max-width: 1024px) {
    height: 60rem;
  }

  @media screen and (max-width: 748px) {
    height: 45rem;
  }
`;
const Bg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  z-index: -1;
  @media screen and (max-width: 1024px) {
    height: 60rem;
  }

  @media screen and (max-width: 748px) {
    height: 45rem;
  }
`;
const Float = styled(Image)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 15rem;
  height: 15rem;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const FloatM = styled(Image)`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 21rem;
    right: 0;

    width: 30rem;
    height: 36rem;
    object-fit: cover;
  }

  @media screen and (max-width: 748px) {
    top: 18rem;
    width: 20rem;
    height: 25rem;
  }
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
    justify-content: unset;
    margin-top: 5rem;
  }

  @media screen and (max-width: 748px) {
    margin-top: 3rem;
    width: 90%;
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const Header = styled.div`
  text-align: center;

  width: 70%;
  position: relative;
  color: #45144c;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 748px) {
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
const Smile = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 6rem;
  right: 8rem;

  @media screen and (max-width: 1024px) {
    top: 5.2rem;
    right: 15rem;
  }

  @media screen and (max-width: 748px) {
    top: 3rem;
    right: 4rem;
  }
`;
const P = styled.p`
  text-align: center;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: #133503;
  color: #fff;
  cursor: pointer;
  border: none;

  width: 10rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #133503;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #133503;
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

const Intro = () => {
  return (
    <Div>
      <Bg src="/bg1.webp" width={2000} height={2000} alt="background" />
      <Float
        src="/couple2.svg"
        width={2000}
        height={2000}
        alt="float"
        top="3rem"
        right="0"
      />
      <Float
        src="/couple1.svg"
        width={2000}
        height={2000}
        alt="float"
        top="16rem"
        left="0"
      />

      <FloatM src="/bg3.svg" width={2000} height={2000} alt="float" />

      <Wrapper>
        <Heading>
          <Header className="ds-font">
            <H1>Join Us in Celebrating Our Love</H1>{" "}
            <Smile src="/smile.svg" width={2000} height={2000} alt="smile" />
          </Header>
          <P>We are so excited to share our special day with you!</P>
        </Heading>
        <Link href="#celebrate">
          <Btn>Celebrate with Us</Btn>
        </Link>
      </Wrapper>
    </Div>
  );
};

export default Intro;
