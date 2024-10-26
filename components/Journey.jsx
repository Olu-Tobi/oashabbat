"use client";

import Image from "next/image";
import { GoGift } from "react-icons/go";
import { PiCashRegister } from "react-icons/pi";
import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";

import { useRouter } from "next/navigation";
import JourneyImage from "./JourneyImage";

const Div = styled.div`
  padding: 4rem 0;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 748px) {
  }
`;
const Float = styled(Image)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  z-index: -1;

  @media screen and (max-width: 1024px) {
    top: ${(props) => props.topM};
    left: ${(props) => props.leftM};
    right: ${(props) => props.rightM};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 748px) {
  }
`;
const H2 = styled.h2`
  font-size: 3.2rem;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 1.1rem;

  width: 50%;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #fff;

  height: 5rem;
  padding: 0 3rem;

  @media screen and (max-width: 748px) {
    display: none;
  }
`;

const Bottom2 = styled.div`
  display: none;
  @media screen and (max-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    background: #fff;
    width: 100%;

    height: 5rem;
    padding: 0 3rem;
    margin-top: 2rem;
  }
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  border: none;

  width: 8rem;
  height: 2.5rem;
  box-shadow: 1px 1px white, 2px 2px #133503;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${(props) => props.back};
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
`;

const Journey = () => {
  const router = useRouter();
  return (
    <Div id="explore">
      <Float
        src="/bg2.svg"
        width={2000}
        height={2000}
        alt="float"
        top="-5rem"
        right="-5rem"
        rightM="-10rem"
      />
      <Float
        src="/bg2.svg"
        width={2000}
        height={2000}
        alt="float"
        top="0rem"
        left="0"
        topM="2rem"
        leftM="-8rem"
      />
      <Wrapper>
        <H2 className="ds-font">Our Journey</H2>
        <Desc>
          Our journey has been that of friendship, laughter, making friends of
          friends, celebration with family, and now Joy everlasting with God on
          our side.
        </Desc>
        <JourneyImage />

        <Bottom>
          <Btn
            background="#C5D87C"
            color="#000"
            back="#C5D87C"
            style={{ boxShadow: "1px 1px white, 2px 2px #C5D87C" }}
            onClick={() => {
              navigator.clipboard.writeText(
                "RSVP- Akintunde: +2347065704074 OR Oluwaferanmi: +2348129372598"
              );
              alert(
                "Copied: RSVP- Akintunde: +2347065704074 OR Oluwaferanmi: +2348129372598"
              );
            }}
          >
            <PiCashRegister style={{ fontSize: "1.1rem" }} />
            RSVP
          </Btn>
          <a href="/pre-wedding">
            {" "}
            <Btn
              background="#45144C"
              color="#fff"
              back="#45144C"
              style={{ width: "14rem" }}
            >
              <IoImageOutline style={{ fontSize: "1.1rem" }} />
              View Pre-wedding shoot
            </Btn>
          </a>
          <a href="/wishlist">
            <Btn background="#133503" color="#fff" back="#133503">
              <GoGift style={{ fontSize: "1.1rem" }} />
              Gift Us
            </Btn>
          </a>
        </Bottom>

        {/* for mobile */}
        <Bottom2>
          <Btn
            background="#C5D87C"
            color="#000"
            back="#C5D87C"
            style={{ boxShadow: "1px 1px white, 2px 2px #C5D87C" }}
            onClick={() => {
              navigator.clipboard.writeText(
                "RSVP- Akintunde: +2347065704074 OR Oluwaferanmi: +2348129372598"
              );
              alert(
                "Copied: RSVP- Akintunde: +2347065704074 OR Oluwaferanmi: +2348129372598"
              );
            }}
          >
            <PiCashRegister style={{ fontSize: "1.1rem" }} />
            RSVP
          </Btn>
          <a href="/wishlist">
            <Btn background="#133503" color="#fff" back="#133503">
              <GoGift style={{ fontSize: "1.1rem" }} />
              Gift Us
            </Btn>
          </a>
          <a href="/pre-wedding">
            <Btn
              background="#45144C"
              color="#fff"
              back="#45144C"
              style={{ width: "14rem" }}
            >
              <IoImageOutline style={{ fontSize: "1.1rem" }} />
              View Pre-wedding shoot
            </Btn>
          </a>
        </Bottom2>
      </Wrapper>
    </Div>
  );
};

export default Journey;
