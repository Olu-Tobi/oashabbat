// "use client";
// import Image from "next/image";
// import styled from "styled-components";

// const Div = styled.div`
//   padding: 3rem 2rem;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `;

// const StoryImg = styled(Image)`
//   width: 100%;
//   height: 2.2rem;
//   object-fit: contain;
// `;
// const SectionTitle = styled.h2`
//   text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     //grid-template-columns: 1fr;
//   }
// `;
// const PersonCard = styled.div`
//   text-align: center;
//   animation: ${({ inView }) => (inView ? slideInFromBottom : "none")} 1s
//     ease-out forwards;
// `;
// const StyledImage = styled(Image)`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 8px;
// `;
// const Name = styled.p`
//   font-weight: bold;
//   margin: 0.5rem 0 0;
// `;
// const Role = styled.p`
//   font-size: 0.9rem;
//   color: #666;
// `;

// const Bgp = () => {
//   return (
//     <Div>
//       <Wrapper>
//         <Grid>
//           {bridesMaid.map((item, i) => (
//             <PersonCard key={i}>
//               <StyledImage
//                 src={item.image}
//                 alt={item.name}
//                 width={2000}
//                 height={2000}
//               />
//               <Name>{item.name}</Name>
//               <Role>{item.role}</Role>
//             </PersonCard>
//           ))}
//         </Grid>

//         <StoryImg src="/gold.png" width={800} height={800} alt="element" />

//         <Grid>
//           {groomsMen.map((item, i) => (
//             <PersonCard key={i}>
//               <StyledImage
//                 src={item.image}
//                 alt={item.name}
//                 width={2000}
//                 height={2000}
//               />
//               <Name>{item.name}</Name>
//               <Role>{item.role}</Role>
//             </PersonCard>
//           ))}
//         </Grid>
//       </Wrapper>
//     </Div>
//   );
// };

// export default Bgp;

"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Div = styled.div`
  padding: 3rem 2rem;
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StoryImg = styled(Image)`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 748px) {
    //grid-template-columns: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PersonCard = styled.div`
  text-align: center;
  opacity: 0; /* Initially hidden */
  transform: translateY(40px); /* Slide up from bottom */
  transition: opacity 0.5s ease-out, transform ${(props) => props.time} ease-out;
  &.visible {
    animation: ${fadeInSlideUp} 0.8s ease-out forwards;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 480px) {
    height: 16rem;

    //grid-template-columns: 1fr;
  }
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0.5rem 0 0;
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Bgp = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevItems) =>
              new Set(prevItems).add(entry.target)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Div>
      <Wrapper>
        <Grid>
          {bridesMaid.map((item, i) => (
            <PersonCard
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={visibleItems.has(cardRefs.current[i]) ? "visible" : ""}
            >
              <StyledImage
                src={item.image}
                alt={item.name}
                width={2000}
                height={2000}
                loading="lazy"
              />
              <Name>{item.name}</Name>
              <Role>{item.role}</Role>
            </PersonCard>
          ))}
        </Grid>

        <StoryImg src="/gold.png" width={800} height={800} alt="element" />

        <Grid>
          {groomsMen.map((item, i) => (
            <PersonCard
              time={i % 0 == 2 ? "0.8" : "0.5"}
              key={i + bridesMaid.length}
              ref={(el) => (cardRefs.current[i + bridesMaid.length] = el)}
              className={
                visibleItems.has(cardRefs.current[i + bridesMaid.length])
                  ? "visible"
                  : ""
              }
            >
              <StyledImage
                src={item.image}
                alt={item.name}
                width={2000}
                height={2000}
              />
              <Name>{item.name}</Name>
              <Role>{item.role}</Role>
            </PersonCard>
          ))}
        </Grid>
      </Wrapper>
    </Div>
  );
};

export default Bgp;

const bridesMaid = [
  {
    image: "/brides/ayan.webp",
    name: "Adegbite Ayanfejesu",
    role: "Chief Bridesmaid",
  },
  {
    image: "/brides/AkinwaleOpeyemi.webp",
    name: "Akinwale Opeyemi",
    role: " Bridesmaid",
  },
  {
    image: "/brides/IdowuOluwatofunmi.webp",
    name: "Idowu Oluwatofunmi",
    role: " Bridesmaid",
  },
  {
    image: "/brides/AdepojuToyin.webp",
    name: "Adepoju Toyin",
    role: " Bridesmaid",
  },
  {
    image: "/brides/AdewoleRebecca.webp",
    name: "Adewole Rebecca",
    role: " Bridesmaid",
  },
  {
    image: "/brides/AdegbiteOluwasemilore.webp",
    name: "Adegbite Oluwasemilore",
    role: " Bridesmaid",
  },
  {
    image: "/brides/AkintolaDamilola.webp",
    name: "Akintola Damilola",
    role: " Bridesmaid",
  },
  {
    image: "/brides/EmmanuelFaith.webp",
    name: "Emmanuel Faith",
    role: " Bridesmaid",
  },
  {
    image: "/brides/EmmanuelFavour.webp",
    name: "Emmanuel Favour",
    role: " Bridesmaid",
  },
  {
    image: "/brides/IgbozurikeShalom.webp",
    name: "Igbozurike Shalom",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OdedoyinComfort.webp",
    name: "Odedoyin Comfort",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OguntolaGladys.webp",
    name: "Oguntola Gladys",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OkunlolaInioluwa.webp",
    name: "Okunlola Inioluwa",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OlasupoSuccess.webp",
    name: "Olasupo Success",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OluwajobaOlamide.webp",
    name: "OluwaJoba Olamide",
    role: " Bridesmaid",
  },
  {
    image: "/brides/oluwaseyi.webp",
    name: "Agbato Oluwaseyi",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OluwatunmiseJumoke.webp",
    name: "Oluwatunmise Jumoke",
    role: " Bridesmaid",
  },
  {
    image: "/brides/OmidioraMary.webp",
    name: "Omidiora Mary",
    role: " Bridesmaid",
  },
];

const groomsMen = [
  {
    image: "/grooms/tbass.webp",
    name: "Daramola Tobi",
    role: "Best Man",
  },
  {
    image: "/grooms/arch.webp",
    name: "Orisajo Toluwani",
    role: "Groomsman",
  },
  {
    image: "/grooms/dave.webp",
    name: "Oyeleye David",
    role: "Groomsman",
  },
  {
    image: "/grooms/eni.webp",
    name: "Mowobi Eniola",
    role: "Groomsman",
  },
  {
    image: "/grooms/eph.webp",
    name: "Omerhi Ephraim",
    role: "Groomsman",
  },
  {
    image: "/grooms/feranmi.webp",
    name: "Adewojo Feranmi",
    role: "Groomsman",
  },
  {
    image: "/grooms/mo.webp",
    name: "Olawale-Jimoh Motelejesu",
    role: "Groomsman",
  },
  {
    image: "/grooms/ola.webp",
    name: "Babatunde Olamide",
    role: "Groomsman",
  },
  {
    image: "/grooms/pog.webp",
    name: "Odediran PraiseofGod",
    role: "Groomsman",
  },
  {
    image: "/grooms/zac.webp",
    name: "Oluwasegun Zacheus",
    role: "Groomsman",
  },
];
