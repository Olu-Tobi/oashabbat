import Image from "next/image";

import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

// Keyframes for sliding in animations
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Div = styled.div`
  padding: 4rem 0;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 748px) {
    margin-top: unset;
    padding: 1.5rem 0;
  }
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 748px) {
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const H20 = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

const H2 = styled.h2`
  font-size: 3.2rem;
`;

const StoryImg = styled(Image)`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;

const StoryDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2.2rem;
  height: 30rem;

  @media screen and (max-width: 748px) {
    flex-direction: column;
    height: unset;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) =>
    inView ? "translateX(0)" : "translateX(-100%)"};
  animation: ${({ inView }) => (inView ? slideInLeft : "none")} 1s ease-out
    forwards;

  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? "translateX(0)" : "translateX(100%)")};
  animation: ${({ inView }) => (inView ? slideInRight : "none")} 1s ease-out
    forwards;

  @media screen and (max-width: 748px) {
    width: 100%;
  }
`;

const Names = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  @media screen and (max-width: 748px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  width: 90%;
  line-height: 1.7rem;
  font-size: 1.1rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
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
  margin-top: 1rem;

  width: 10rem;
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

const BGImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Story = () => {
  const router = useRouter();

  // Use IntersectionObserver to track visibility of Left and Right components
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });

  return (
    <Div>
      <Wrapper>
        <Heading>
          <H20>OUR LOVE STORY</H20>
          <StoryImg
            src="/element-love-story.png"
            width={800}
            height={800}
            alt="element"
          />
          <H2 className="ds-font">Bride & Groom</H2>
        </Heading>

        <StoryDiv>
          <Left ref={leftRef} inView={leftInView}>
            <Names>Oluwadara & Ayomide</Names>
            <Desc>
              We found ourselves talking daily, both in person and over the
              phone, savoring each moment together. The first time I visited her
              in her hostel room, I savored the taste of heavenly hospitality.
              One year transformed into seven, and our friendship matured like
              fine wine. As our friendship deepened.....
              <br />
              <br />
              #OASHABBAT'24
            </Desc>
            <a href="/our-story">
              <Btn>OUR STORY</Btn>
            </a>
          </Left>
          <Right ref={rightRef} inView={rightInView}>
            <BGImage
              src="/preWedding/7.jpg"
              width={2000}
              height={2000}
              alt="image"
            />
          </Right>
        </StoryDiv>
      </Wrapper>
    </Div>
  );
};

export default Story;
