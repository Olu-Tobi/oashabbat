"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GoGift } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Div = styled.div`
  background: #fff;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Image)`
  width: 3.3rem;
  height: 3.3rem;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MenuDiv = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

const Ul2 = styled.ul`
  list-style: none;
  display: none;

  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 4.5rem;
    right: 0;
    width: 18rem;
    height: 40rem;
    background: rgba(225, 225, 225, 0.8);
    backdrop-filter: blur(15px);
    padding: 2.5rem 1.7rem;
    color: #000;
    z-index: 12;
  }

  @media screen and (max-width: 748px) {
    width: 13rem;
  }
`;
const LiDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Li = styled(Link)`
  font-weight: 600;
  font-size: 1rem;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
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

  width: 8rem;
  height: 2.5rem;
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
`;

const Navbar = () => {
  const [Isfont, setIsFont] = useState(1);
  const [click, setClick] = useState(false);

  const currentRoute = usePathname(); // Get the current route here

  useEffect(() => {
    currentRoute == "/wishlist" && setIsFont(3);
  }, []);

  return (
    <Div>
      <Wrapper>
        <Logo src="/logod.svg" width={2000} height={2000} alt="logo" />
        <Ul>
          <LiDiv>
            <Li
              href="/"
              onClick={() => setIsFont(1)}
              opacity={Isfont == 1 ? "1" : "0.6"}
            >
              Welcome
            </Li>

            <Li
              href="/#big-day"
              onClick={() => setIsFont(2)}
              opacity={Isfont == 2 ? "1" : "0.6"}
            >
              Big Day
            </Li>

            <Li
              href="/wishlist"
              onClick={() => setIsFont(3)}
              opacity={Isfont == 3 ? "1" : "0.6"}
            >
              Gift Us
            </Li>

            <Li
              href="/#explore"
              onClick={() => setIsFont(4)}
              opacity={Isfont == 4 ? "1" : "0.6"}
            >
              Explore
            </Li>
          </LiDiv>

          <Link href="/wishlist">
            <Btn>
              <GoGift style={{ fontSize: "1.1rem" }} />
              Gift Us
            </Btn>
          </Link>
        </Ul>

        <MenuDiv>
          {!click && (
            <CgMenuLeft
              onClick={() => setClick(true)}
              style={{ fontSize: "2rem" }}
            />
          )}
          {click && (
            <CgClose
              onClick={() => setClick(false)}
              style={{ fontSize: "2rem" }}
            />
          )}
        </MenuDiv>

        {click && (
          <Ul2>
            <LiDiv>
              <Li
                href="/"
                onClick={() => {
                  setIsFont(1), setClick(false);
                }}
                opacity={Isfont == 1 ? "1" : "0.6"}
              >
                Welcome
              </Li>

              <Li
                href="/#big-day"
                onClick={() => {
                  setIsFont(2), setClick(false);
                }}
                opacity={Isfont == 2 ? "1" : "0.6"}
              >
                Big Day
              </Li>

              <Li
                href="/wishlist"
                onClick={() => {
                  setIsFont(3), setClick(false);
                }}
                opacity={Isfont == 3 ? "1" : "0.6"}
              >
                Gift Us
              </Li>

              <Li
                href="/#explore"
                onClick={() => {
                  setIsFont(4), setClick(false);
                }}
                opacity={Isfont == 4 ? "1" : "0.6"}
              >
                Explore
              </Li>
            </LiDiv>

            <Link
              href="/wishlist"
              onClick={() => {
                setClick(false);
              }}
            >
              <Btn>
                <GoGift style={{ fontSize: "1.1rem" }} />
                Gift Us
              </Btn>
            </Link>
          </Ul2>
        )}
      </Wrapper>
    </Div>
  );
};

export default Navbar;
