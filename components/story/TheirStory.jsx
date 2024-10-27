"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

// Keyframes for left and right sliding animations
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Div = styled.div`
  margin: 4rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (max-width: 748px) {
    margin: 4rem 0 4rem;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 748px) {
    gap: 1rem;
  }
`;

const Left = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: ${(props) => props.height};
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? slideInFromLeft : "none")} 1s ease-out
    forwards;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? slideInFromRight : "none")} 1s ease-out
    forwards;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Names = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`;
const Desc = styled.p`
  width: 100%;
  font-size: 1rem;
`;

const BGImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 -20px;
`;

const TheirStory = () => {
  // Define intersection observers for the animated components
  const { ref: leftRef1, inView: leftInView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: rightRef1, inView: rightInView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: leftRef2, inView: leftInView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: rightRef2, inView: rightInView2 } = useInView({
    triggerOnce: true,
  });

  return (
    <Div>
      <Wrapper>
        <Left ref={leftRef1} inView={leftInView1} height="30rem">
          <BGImage src="/5.webp" width={2000} height={2000} alt="image" />
        </Left>
        <Right ref={rightRef1} inView={rightInView1}>
          <Names>His Story</Names>
          <Desc>
            It was the start of a new chapter in my life – my admission into the
            prestigious Obafemi Awolowo University. Little did I know that my
            path was about to cross with the woman who would become my lifelong
            partner.
            <br />
            <br />I joined the New Covenant Campus Fellowship, and it was there
            that I first noticed a petite sister with an unparalleled passion
            for God's work. Her commitment and fervency during the Catch Them
            Young Program captivated me, and I found myself drawn to her
            unwavering spirit.
            <br />
            <br />
            Though I was new and shy, the heavens conspired to bring us
            together. When our pastor announced that one of the sisters on the
            executive was indisposed, I felt compelled to heed the call and
            check on her – lo and behold, it was the very same sister who had
            captured my attention.
            <br />
            <br />A year later, during a Leadership Training Program, we were
            placed in the same group, and even more remarkably, we were paired
            as partners. As our friendship deepened, the lines between teammates
            and soulmates began to blur. Guided by the wisdom of our leaders and
            the stirrings within our hearts, seven years of unwavering
            friendship have paved the way for our arrival at the Shabbat – the
            Rest of God. From teammates to soulmates, our journey is a testament
            to divine orchestration.
            <br />
            Our story is living proof that sometimes, the most beautiful
            relationships begin with a simple, obedient call.
          </Desc>
        </Right>
      </Wrapper>

      <Wrapper>
        <Left ref={leftRef2} inView={leftInView2} height="30rem">
          <BGImage
            src="/journey/20233.webp"
            width={2000}
            height={2000}
            alt="image"
          />
        </Left>
        <Right ref={rightRef2} inView={rightInView2}>
          <Names>Her Story</Names>
          <Desc>
            Well, well, well, I met my Man of God in the house of God. It was
            such a busy period for us in church and we were all swamped. All we
            ever said to each other were just random hellos, until the time I
            fell sick. He had noticed my absence and called to check up on me.
            <br />
            <br />
            Upon my return, we had better conversations, were paired together in
            a leadership group and had no choice but become friends.
            <br />
            <br />
            Our years of intentional friendship have blossomed into a lifetime
            where faith, hope and love are intertwined.
            <br />
            <br />
            Grateful to doing life with the most intentional man.
          </Desc>
        </Right>
      </Wrapper>
    </Div>
  );
};

export default TheirStory;
