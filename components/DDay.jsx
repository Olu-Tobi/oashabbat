"use client";

import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import styled from "styled-components";

const Div = styled.div`
  padding: 4rem;
  @media screen and (max-width: 1024px) {
    padding: unset;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 748px) {
    padding-bottom: 2rem;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #faffe8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  height: 25rem;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;
const H2 = styled.h2`
  font-size: 4.3rem;
  color: #45144c;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 748px) {
    font-size: 2.3rem;
    width: 70%;
  }
`;
const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const Timer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 748px) {
    gap: 2rem;
  }
`;
const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;
const PTimer = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;
const Pdays = styled.p`
  font-weight: 700;
`;

const DDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date("November 8, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Avoid rendering on the server side
    return null;
  }
  return (
    <Div id="big-day">
      <Wrapper>
        <H2 className="ds-font">The D-Day is Upon Us</H2>
        <P>
          <SlCalender />
          8th of November, 2024
        </P>
        <Timer className="ds-font">
          <TimeDiv>
            <PTimer>
              {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
            </PTimer>
            <Pdays>Days</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
            </PTimer>
            <Pdays>Hours</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.minutes < 10
                ? "0" + timeLeft.minutes
                : timeLeft.minutes}
            </PTimer>{" "}
            <Pdays>Minutes</Pdays>
          </TimeDiv>
          <TimeDiv>
            <PTimer>
              {timeLeft.seconds < 10
                ? "0" + timeLeft.seconds
                : timeLeft.seconds}
            </PTimer>{" "}
            <Pdays>Seconds</Pdays>
          </TimeDiv>
        </Timer>
      </Wrapper>
    </Div>
  );
};

export default DDay;
