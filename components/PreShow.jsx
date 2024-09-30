"use client";
import Image from "next/image";
import styled from "styled-components";
import { PreWedding } from "./Data";

import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { BsDownload } from "react-icons/bs";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-bottom: 3rem;
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
`;

const PictureDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 748px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

const Download = styled.div`
  margin-right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.6;

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
  background: #000;
  border: 1px solid #000;
  color: #fff;
  cursor: pointer;
  //border: none;

  width: 10rem;
  height: 2.8rem;
  box-shadow: 1px 1px white, 2px 2px #000;

  font-family: inherit;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #000;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
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
  color: #333;
`;

const DownloadButton = styled.button`
  position: absolute;
  top: 30px;
  right: 3rem;
  font-size: 1.7rem;

  color: #333;
  background: transparent;

  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

const PreShow = () => {
  const downloadAllImages = async () => {
    const zip = new JSZip();
    const folder = zip.folder("PreWeddingImages");

    // Loop through each image and add it to the zip
    for (let i = 0; i < PreWedding.length; i++) {
      const imagePath = `${PreWedding[i].image}`; // Correct path
      const response = await fetch(imagePath);
      if (!response.ok) {
        console.error(`Failed to fetch image: ${imagePath}`);
        continue;
      }
      const blob = await response.blob();
      folder.file(PreWedding[i].image, blob);
    }

    // Generate the zip and trigger the download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "PreWeddingImages.zip");
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const downloadImage = (image) => {
    saveAs(image, image.split("/").pop()); // Save the image from the path
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
              onClick={() => openModal(item.image)}
            />
          ))}
        </PictureDiv>
      </Wrapper>
      <BtnDiv>
        <Link href="#show">
          <Btn>BACK TO TOP</Btn>
        </Link>
      </BtnDiv>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DownloadButton
              onClick={() => downloadImage(selectedImage)}
              title="Download"
            >
              <BsDownload />
            </DownloadButton>
            <CloseButton onClick={closeModal} />
            <ModalImg
              src={selectedImage}
              width={800}
              height={800}
              alt="Selected"
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </Div>
  );
};

export default PreShow;
