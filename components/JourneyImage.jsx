"use client";
import Image from "next/image";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay } from "swiper/modules";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

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
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  backdrop-filter: blur(15px); /* Adds the blur effect */
  background-image: url("/preWedding/6.jpg");
  padding: 1rem;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const PictureDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Year = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);
  text-align: center;
  background: #00000040;
  width: 10rem;
  height: 2.2rem;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  @media screen and (max-width: 1024px) {
    top: 1rem;
    left: 1rem;
  }
`;

const Img = styled(Image)`
  width: 50%;
  height: 35rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  object-position: 0 0.5px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 30rem;
  }

  @media screen and (max-width: 600px) {
    object-position: unset;
  }
`;

const Img2 = styled(Image)`
  width: 100%;
  height: 7rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
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
`;

const ModalImg = styled(Image)`
  width: 90%;
  height: 90%;
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
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Autoplay]}
          className="mySwiper"
        >
          {journeyData.map((item, i) => (
            <SwiperSlide key={i}>
              <Year className="ds-font">{item.year}</Year>
              <PictureDiv>
                <Img
                  key={i}
                  src={item.image}
                  width={500}
                  height={500}
                  alt="image"
                  onClick={() => openModal(i)}
                />
              </PictureDiv>
            </SwiperSlide>
          ))}
        </Swiper>
        {loaded && (
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {journeyData.map((item, i) => (
              <SwiperSlide key={i}>
                <Img2
                  key={i}
                  src={item.image}
                  width={500}
                  height={500}
                  alt="image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Wrapper>

      {selectedImageIndex !== null && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ArrowButton left onClick={prevImage}>
              <MdArrowBack />
            </ArrowButton>

            <CloseButton onClick={closeModal} />

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
  { year: "2017", image: "/journey/2017.webp" },
  { year: "2018", image: "/journey/2018.webp" },
  { year: "2019", image: "/journey/20191.webp" },
  { year: "2019", image: "/journey/20192.webp" },
  { year: "2020", image: "/journey/20201.webp" },
  { year: "2020", image: "/journey/20202.webp" },
  { year: "2021", image: "/journey/20211.webp" },
  { year: "2021", image: "/journey/20212.webp" },
  { year: "2022", image: "/journey/20221.webp" },
  { year: "2022", image: "/journey/20222.webp" },
  {
    year: "2023",
    image: "/journey/20231.webp",
  },
  {
    year: "2023",
    image: "/journey/20232.webp",
  },
  {
    year: "2023",
    image: "/journey/20233.webp",
  },
  {
    year: "Proposal",
    image: "/preWedding/pro5.jpg",
  },
  {
    year: "Proposal",
    image: "/preWedding/pro8.jpg",
  },

  {
    year: "Introduction",
    image: "/journey/intron.webp",
  },
  {
    year: "Introduction",
    image: "/preWedding/pro3.jpg",
  },
];
