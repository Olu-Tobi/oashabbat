import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  background: #d5e69695;
  padding: 4.5rem 0 5rem;
`;
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Logo = styled(Image)`
  width: 3.3rem;
  height: 3.3rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 50%;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    gap: 1.3rem;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.7rem;
  }
`;
const Item = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: none;
`;
const Copy = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const linkOption = [
  {
    url: "/",
    link: "Home",
  },
  {
    url: "/our-story",
    link: "Our Story",
  },
  {
    url: "/bridesmaids-groomsmen",
    link: "Bridesmaid & Groomsmen",
  },
  {
    url: "/#explore",
    link: "Our Journey",
  },
  {
    url: "/pre-wedding",
    link: "Gallery",
  },
];

const Footer = () => {
  return (
    <Div>
      <Wrapper>
        <Logo src="/logod.svg" width={800} height={800} alt="logo" />
        <Nav>
          {linkOption.map((item, i) => (
            <Item key={i} href={item.url}>
              {" "}
              {item.link.toUpperCase()}
            </Item>
          ))}
        </Nav>
        <Copy>&copy; OASHABBAT {new Date().getFullYear()}</Copy>
      </Wrapper>
    </Div>
  );
};

export default Footer;
