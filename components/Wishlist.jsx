"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Data } from "./Data"; // Assuming Data is your dataset

import { BsCashStack, BsCopy } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { setTrigger } from "@/redux/slices/triggerSlice";

const Div = styled.div`
  padding: 4rem 0;
  height: 84rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: unset;
    padding: 3rem 0;
  }
  @media screen and (max-width: 748px) {
    padding: 2rem 0 3rem;
  }
`;

const Back = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  @media screen and (max-width: 1024px) {
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  width: 86%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

const H2 = styled.h2`
  font-size: 3rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 3rem;
  justify-content: center;
  height: 73rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 4 columns */
    grid-gap: 2rem;
    height: unset;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem; /* 4 columns */
  }
`;

const Item = styled.div`
  width: 15rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #fff;
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    width: 12rem;
    height: 19rem;
  }

  @media screen and (max-width: 748px) {
    width: 10rem;
    height: 20rem;
  }
`;

const Img = styled(Image)`
  width: 100%;
  height: 13rem !important;
  object-fit: cover;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 0.8rem;
  height: 2rem;
  font-weight: 600;
  width: 90%;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background: #813387;
  color: #fff;
  cursor: pointer;
  border: none;
  width: 12rem;
  height: 2.2rem;
  box-shadow: 1px 1px white, 2px 2px #813387;
  font-family: inherit;
  position: relative;
  font-size: 0.6rem;

  @media screen and (max-width: 748px) {
    width: 9rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PopDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 90%;
  position: relative;

  @media screen and (max-width: 748px) {
    width: 90%;
    justify-content: flex-start;
    margin-top: 5rem;
  }

  @media screen and (max-width: 390px) {
    width: 90%;
    justify-content: flex-start;
    margin-top: 2.5rem;
  }
`;
const PopH2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  width: 75%;

  @media screen and (max-width: 748px) {
    font-size: 1.5rem;
  }
`;
const PopP = styled.p`
  color: #45144c;
  width: 80%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;

  @media screen and (max-width: 748px) {
    font-size: 0.7rem;
  }
`;
const PopList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  padding-top: 2rem;

  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    width: 90%;
    gap: 0.6rem;
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: unset;
    width: 90%;
    gap: 0.6rem;
  }
`;
const PopItem = styled.div`
  background: #faffe8;
  width: 8rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 2rem 1rem;

  @media screen and (max-width: 748px) {
    width: 17.6rem;
    height: 5rem;
    padding: 1rem;
    gap: 0.7rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (max-width: 390px) {
    width: 17rem;
    height: 4.5rem;
    padding: 1rem;
    gap: 0.4rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const PopTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media screen and (max-width: 748px) {
    gap: 0.6rem;
  }

  @media screen and (max-width: 390px) {
    gap: 0.4rem;
  }
`;

const ItemH2 = styled.h2`
  font-size: 1rem;
  font-weight: 800;
`;

const PopText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemP = styled.p`
  font-size: 0.9rem;
  height: 1.5rem;
`;
const ItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: #c5d87c;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  border: none;

  width: 7rem;
  height: 2rem;
  box-shadow: 1px 1px white, 2px 2px #c5d87c;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #c5d87c;
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

  @media screen and (max-width: 748px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 3.6rem;
    gap: 0.4rem;
  }
`;
const PopFoot = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  @media screen and (max-width: 748px) {
    bottom: 2rem;
  }

  @media screen and (max-width: 390px) {
    font-size: 1.2rem;
    bottom: -1rem;
  }
`;

const PageButton = styled.button`
  background: ${({ active }) => (active ? "#813387" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #813387;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ITEMS_PER_PAGE = 12; // 3 rows, 4 columns

const Wishlist = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const dispatch = useDispatch();

  const trigger = useSelector((state) => state.trigger);

  // Calculate the index of the first and last item for the current page
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = Data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Div id="gift-us">
      <Back src="/bg1.webp" width={2000} height={2000} alt="image" />
      <Wrapper>
        <H2 className="ds-font">Our Wishlist</H2>
        <List>
          {currentItems.map((item, i) => (
            <Item key={i}>
              <Img src={item.image} width={2000} height={2000} alt="image" />
              <Desc>{item.item}</Desc>
              <Btn
                onClick={() => {
                  item.dir != ""
                    ? router.push(`${item.dir}`)
                    : dispatch(setTrigger());
                }}
              >
                <BsCashStack style={{ fontSize: "0.8rem" }} />
                Send {item.amount}
              </Btn>
            </Item>
          ))}
        </List>

        {/* Pagination Controls */}
        <Pagination>
          <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </PageButton>
          {[...Array(totalPages)].map((_, i) => (
            <PageButton
              key={i}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </PageButton>
        </Pagination>
      </Wrapper>

      {trigger && (
        <Popup>
          <PopDiv>
            <PopH2 className="ds-font">
              Please send your gift(s) to any of the options below:
            </PopH2>
            <PopP>
              In case you are sending money, please include the item you are
              sending it for.
            </PopP>
            <PopList>
              <PopItem>
                <PopTop>
                  <ItemH2>Zenith Bank</ItemH2>
                  <PopText>
                    <ItemP>2209256512</ItemP>
                    <ItemP>Woleola Ayomide</ItemP>
                  </PopText>
                </PopTop>
                <ItemBtn
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "2209256512 - Woleola Ayomide (Zenith Bank)"
                    );
                    alert("Copied: 2209256512 - Woleola Ayomide (Zenith Bank)");
                  }}
                >
                  <BsCopy />
                  Copy
                </ItemBtn>
              </PopItem>

              <PopItem>
                <PopTop>
                  <ItemH2>Opay</ItemH2>
                  <PopText>
                    <ItemP>8131508027</ItemP>
                    <ItemP>Woleola Ayomide</ItemP>
                  </PopText>
                </PopTop>
                <ItemBtn
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "8131508027 - Woleola Ayomide (Opay)"
                    );
                    alert("Copied: 8131508027 - Woleola Ayomide (Opay)");
                  }}
                >
                  <BsCopy />
                  Copy
                </ItemBtn>
              </PopItem>

              <PopItem>
                <PopTop>
                  <ItemH2>First Bank</ItemH2>
                  <PopText>
                    <ItemP>3104460226</ItemP>
                    <ItemP>Woleola Ayomide</ItemP>
                  </PopText>
                </PopTop>
                <ItemBtn
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "3104460226 - Woleola Ayomide (First Bank)"
                    );
                    alert("Copied: 3104460226 - Woleola Ayomide (First Bank)");
                  }}
                >
                  <BsCopy />
                  Copy
                </ItemBtn>
              </PopItem>

              <PopItem>
                <PopTop>
                  <ItemH2>For Delivery</ItemH2>
                  <PopText>
                    <ItemP>Ile-Ife Osun State</ItemP>
                    <ItemP style={{ fontSize: "0.7rem" }}>
                      {" "}
                      To get exact address, <br />
                      contact: +234 813 150 8027
                    </ItemP>
                  </PopText>
                </PopTop>
                <ItemBtn
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "Ile-Ife Osun State - Contact: +234 813 150 8027 for exact address"
                    );
                    alert(
                      "Copied: Ile-Ife Osun State - Contact: +234 813 150 8027 for exact address"
                    );
                  }}
                >
                  <BsCopy />
                  Copy
                </ItemBtn>
              </PopItem>
            </PopList>
            <PopFoot className="ds-font">God Bless You!</PopFoot>
          </PopDiv>
        </Popup>
      )}
    </Div>
  );
};

export default Wishlist;
