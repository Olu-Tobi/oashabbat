import Image from "next/image";

import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

// Keyframes for fade-in and slide-up animations
const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Div = styled.div`
  position: relative;
  padding: 3rem 0;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const BackImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
  object-fit: cover;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const H2 = styled.h2`
  font-size: 3.2rem;
  text-align: center;
`;

const StoryImg = styled(Image)`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  gap: 3rem;
  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Con = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Img = styled(Image)`
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? fadeInSlideUp : "none")} 1s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay};
`;

const Id = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Name = styled.p`
  font-weight: 600;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? fadeInSlideUp : "none")} 1s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay};
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #666;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? fadeInSlideUp : "none")} 1s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay};
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

  width: 15rem;
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

const BG = () => {
  // Define the intersection observers for each animated component
  const { ref: bridesmaidImgRef, inView: bridesmaidImgInView } = useInView({
    triggerOnce: true,
  });
  const { ref: bridesmaidNameRef, inView: bridesmaidNameInView } = useInView({
    triggerOnce: true,
  });
  const { ref: bridesmaidRoleRef, inView: bridesmaidRoleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: groomsmanImgRef, inView: groomsmanImgInView } = useInView({
    triggerOnce: true,
  });
  const { ref: groomsmanNameRef, inView: groomsmanNameInView } = useInView({
    triggerOnce: true,
  });
  const { ref: groomsmanRoleRef, inView: groomsmanRoleInView } = useInView({
    triggerOnce: true,
  });

  return (
    <Div>
      <BackImg src="/back.webp" width={2000} height={2000} alt="image" />
      <Wrapper>
        <Heading>
          <H2 className="ds-font">Bridesmaids & Groomsmen</H2>
          <StoryImg
            src="/element-love-story.png"
            width={800}
            height={800}
            alt="element"
          />
        </Heading>

        <Inner>
          <Con>
            <Img
              ref={bridesmaidImgRef}
              inView={bridesmaidImgInView}
              delay="0s"
              src="/brides/ayan.webp"
              width={800}
              height={800}
              alt="image"
            />
            <Id>
              <Name
                ref={bridesmaidNameRef}
                inView={bridesmaidNameInView}
                delay="0s"
              >
                Adegbite Ayanfejesu
              </Name>
              <Role
                ref={bridesmaidRoleRef}
                inView={bridesmaidRoleInView}
                delay="0s"
              >
                Chief Bridesmaid
              </Role>
            </Id>
          </Con>
          <Con>
            <Img
              ref={groomsmanImgRef}
              inView={groomsmanImgInView}
              delay="0s"
              src="/grooms/tbass.webp"
              width={800}
              height={800}
              alt="image"
            />
            <Id>
              <Name
                ref={groomsmanNameRef}
                inView={groomsmanNameInView}
                delay="0s"
              >
                Daramola Tobi
              </Name>
              <Role
                ref={groomsmanRoleRef}
                inView={groomsmanRoleInView}
                delay="0s"
              >
                Best Man
              </Role>
            </Id>
          </Con>
        </Inner>

        <a href="/bridesmaids-groomsmen">
          <Btn>Bridesmaids & Groomsmen</Btn>
        </a>
      </Wrapper>
    </Div>
  );
};

export default BG;
