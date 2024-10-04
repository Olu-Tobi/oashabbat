"use client";
import Image from "next/image";
import styled from "styled-components";
import { PreWedding } from "./Data";

import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { BsDownload } from "react-icons/bs";
import {
  MdOutlineKeyboardBackspace,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md"; // Arrows for navigation
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-bottom: 3rem;
  background: #0f0f0f;
`;

const Wrapper = styled.div`
  width: 97%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 1rem;
  color: #fff;
`;

const PictureDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Responsive masonry layout */
  grid-auto-rows: 250px; /* Base height for rows */
  gap: 1rem; /* Uniform gap between images */

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  transition: filter 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    filter: brightness(1.2); /* Increases brightness on hover */
  }

  &:nth-child(2n) {
    grid-row: span 2;
  }
`;

const Download = styled.div`
  margin-right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.6;
  color: #fff;

  &:hover {
    opacity: 1;
  }
`;

const BtnDiv = styled.div``;
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

const DownloadButton = styled.button`
  position: absolute;
  top: 30px;
  right: 3rem;
  font-size: 1.7rem;

  color: #fff;
  background: transparent;

  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #ccc;
  }
`;

const PreShow = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const downloadAllImages = async () => {
    const zip = new JSZip();
    const folder = zip.folder("PreWeddingImages");

    for (let i = 0; i < PreWedding.length; i++) {
      const imagePath = `${PreWedding[i].image}`;
      const response = await fetch(imagePath);
      if (!response.ok) {
        console.error(`Failed to fetch image: ${imagePath}`);
        continue;
      }
      const blob = await response.blob();
      folder.file(PreWedding[i].image, blob);
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "PreWeddingImages.zip");
    });
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === PreWedding.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? PreWedding.length - 1 : prevIndex - 1
    );
  };

  const downloadImage = (image) => {
    saveAs(image, image.split("/").pop());
  };

  return (
    <Div id="show">
      <Wrapper>
        <Head>
          <H2>OA SHABBAT '24</H2>
          <Download onClick={downloadAllImages} title="Download All">
            <BsDownload />
          </Download>
        </Head>
        <PictureDiv>
          {PreWedding.map((item, i) => (
            <Img
              key={i}
              src={item.image}
              width={500}
              height={500}
              alt="image"
              onClick={() => openModal(i)}
            />
          ))}
        </PictureDiv>
      </Wrapper>
      <BtnDiv>
        <Link href="#show">
          <Btn>BACK TO TOP</Btn>
        </Link>
      </BtnDiv>

      {selectedImageIndex !== null && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ArrowButton left onClick={prevImage}>
              <MdArrowBack />
            </ArrowButton>

            <DownloadButton
              onClick={() =>
                downloadImage(PreWedding[selectedImageIndex].image)
              }
              title="Download"
            >
              <BsDownload />
            </DownloadButton>

            <CloseButton onClick={closeModal} />

            <ModalImg
              src={PreWedding[selectedImageIndex].image}
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

export default PreShow;
