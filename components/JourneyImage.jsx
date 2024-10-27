"use client";
import Image from "next/image";
import styled from "styled-components";

import {
  MdOutlineKeyboardBackspace,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md"; // Arrows for navigation
import { useEffect, useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
  }
`;

const PictureDiv = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 748px) {
    height: 30rem;
  }
`;

const Inner = styled.div`
  width: 40%;
  height: 25rem;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 65%;
  }

  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: absolute;

  top: ${(props) => props.top};
  left: ${(props) => props.left};

  @media screen and (max-width: 748px) {
    width: 4rem;
    height: 4rem;
  }

  animation: blink infinite ease-in-out;
  animation-duration: ${(props) => props.time};

  @keyframes blink {
    0% {
      background: rgba(246, 97, 39, 0);
    }
    50% {
      background: #c5d87c70;
    }

    100% {
      background: rgba(246, 97, 39, 0);
    }
  }
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #538a39;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;

  @media screen and (max-width: 748px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

const Year = styled.p`
  text-align: center;

  width: 10rem;
  height: 2.2rem;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  @media screen and (max-width: 1024px) {
  }
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    object-position: unset;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px); /* Adds the blur effect */
  background: rgba(0, 0, 0, 0.5); /* Dark tinted background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  background: transparent;
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ModalImg = styled(Image)`
  width: 90%;
  height: 80%;
  object-fit: contain;
`;

const CloseButton = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  top: 30px;
  left: 20px;
  font-size: 1.7rem;
  cursor: pointer;
  color: #fff;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }

  ${({ left }) => left && `left: 20px;`}
  ${({ right }) => right && `right: 20px;`}
`;

const JourneyImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === journeyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? journeyData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Div id="show">
      <Wrapper>
        <PictureDiv>
          <Inner>
            {journeyData.map((item, i) => (
              <CircleDiv
                top={item.top}
                left={item.left}
                time={item.time}
                key={i}
                style={{ display: item.top == "null" ? "none" : "flex" }}
                onClick={() => openModal(i)}
              >
                <Circle>{item.year}</Circle>
              </CircleDiv>
            ))}
          </Inner>
          <Img
            src="/6.webp"
            width={2000}
            height={2000}
            alt="image"
            loading="lazy"
          />
        </PictureDiv>
      </Wrapper>

      {selectedImageIndex !== null && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ArrowButton left onClick={prevImage}>
              <MdArrowBack />
            </ArrowButton>

            <CloseButton onClick={closeModal} />

            <Year>{journeyData[selectedImageIndex].year}</Year>

            <ModalImg
              src={journeyData[selectedImageIndex].image}
              width={800}
              height={800}
              alt="Selected"
            />

            <ArrowButton right onClick={nextImage}>
              <MdArrowForward />
            </ArrowButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Div>
  );
};

export default JourneyImage;

const journeyData = [
  {
    year: "'17",
    image: "/journey/2017.webp",
    top: "15%",
    left: "15%",
    time: "2s",
  },
  {
    year: "'18",
    image: "/journey/2018.webp",
    top: "15%",
    left: "40%",
    time: "3s",
  },
  {
    year: "'19",
    image: "/journey/20191.webp",
    top: "15%",
    left: "65%",
    time: "4s",
  },
  {
    year: "'19",
    image: "/journey/20192.webp",
    top: "45%",
    left: "15%",
    time: "3S",
  },
  {
    year: "'20",
    image: "/journey/20201.webp",
    top: "45%",
    left: "40%",
    time: "2s",
  },
  {
    year: "'20",
    image: "/journey/20202.webp",
    top: "null",
    left: "null",
    time: "null",
  },
  {
    year: "'21",
    image: "/journey/20211.webp",
    top: "45%",
    left: "65%",
    time: "4s",
  },
  {
    year: "'21",
    image: "/journey/20212.webp",
    top: "null",
    left: "null",
    time: "null",
  },
  {
    year: "'22",
    image: "/journey/20221.webp",
    top: "75%",
    left: "15%",
    time: "3s",
  },
  {
    year: "'22",
    image: "/journey/20222.webp",
    top: "null",
    left: "null",
    time: "null",
  },
  {
    year: "'23",
    image: "/journey/20231.webp",
    top: "75%",
    left: "40%",
    time: "2s",
  },
  {
    year: "'23",
    image: "/journey/20232.webp",
    top: "null",
    left: "null",
    time: "null",
  },
  {
    year: "'23",
    image: "/journey/20233.webp",
    top: "null",
    left: "null",
    time: "null",
  },
  {
    year: "'24",
    image: "/preWedding/pro5.jpg",
    top: "75%",
    left: "65%",
    time: "4s",
  },
  {
    year: "'24",
    image: "/preWedding/pro8.jpg",
    top: "null",
    left: "null",
    time: "null",
  },

  // {
  //   year: "Introduction",
  //   image: "/journey/intron.webp",
  // },
  {
    year: "'24",
    image: "/preWedding/pro3.jpg",
    top: "null",
    left: "null",
    time: "null",
  },
];
