"use client";
import styled from "styled-components";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { PiCashRegister } from "react-icons/pi";
import Link from "next/link";

const Div = styled.div`
  background: #faffe8;

  @media screen and (max-width: 748px) {
    background: #fff;
  }
`;
const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 28rem;

  @media screen and (max-width: 748px) {
    height: unset;
    width: 90%;
    padding-bottom: 3rem;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media screen and (max-width: 1024px) {
    gap: 4rem;
  }

  @media screen and (max-width: 748px) {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background: #fff;
  width: 20rem;
  height: 5rem;
  padding: 0 3rem;
  @media screen and (max-width: 748px) {
    width: 90%;
    padding: unset;
  }
`;
const Det = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 17rem;

  @media screen and (max-width: 748px) {
    background: #faffe8;
    padding: 1.3rem;
    width: 80%;
    align-items: center;
  }
`;
const Line = styled.div`
  height: 13rem;
  width: 1px;
  background: #c5d87c;

  @media screen and (max-width: 748px) {
    height: 1px;
    width: 60%;
  }
`;

const H2 = styled.h2``;
const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
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

const Info = () => {
  return (
    <Div id="celebrate">
      <Wrapper>
        <Top>
          <Det>
            <H2>Engagement Ceremony</H2>
            <P>
              <SlCalender />
              8th of November, 2024
            </P>
            <P>
              <MdOutlineAccessTime style={{ fontSize: "1.2rem" }} />
              03:00 PM WAT
            </P>
          </Det>
          <Line></Line>
          <Det>
            <H2>Wedding Ceremony</H2>
            <P>
              <SlCalender />
              9th of November, 2024
            </P>
            <P>
              <MdOutlineAccessTime style={{ fontSize: "1.2rem" }} />
              10:00 AM WAT
            </P>
          </Det>
        </Top>
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
          <Link href="/wishlist">
            <Btn background="#133503" color="#fff" back="#133503">
              <GoGift style={{ fontSize: "1.1rem" }} />
              Gift Us
            </Btn>
          </Link>
        </Bottom>
      </Wrapper>
    </Div>
  );
};

export default Info;
