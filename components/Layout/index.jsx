import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Navbar"), { ssr: false });
import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { socialLinks } from "@/utils/constants";
import Link from "next/link";

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <Container>
      <Navbar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <MenuContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <Image
          src={showMobileMenu ? "/assets/close.svg" : "/assets/menu.svg"}
          height={30}
          width={30}
          alt="menu"
        />
      </MenuContainer>
      <ThemeIcon
        src={isDarkTheme ? "/assets/sun.svg" : "/assets/moon.svg"}
        height={30}
        width={30}
        alt="theme"
        onClick={() => toggleTheme()}
      />
      <SocialMediaIcons>
        {socialLinks.map((social) => {
          return (
            <SocialLink href={social.link} key={social.id} target="_blank">
              <SocialIcon
                src={social.image}
                height={30}
                width={30}
                alt="icon"
              />
            </SocialLink>
          );
        })}
      </SocialMediaIcons>
      {children}
    </Container>
  );
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const MenuContainer = styled.div`
  position: fixed;
  z-index: 101;
  top: 2rem;
  left: 2rem;
  display: none;
  cursor: pointer;
  @media (max-width: 981px) {
    display: block;
  }
`;

const ThemeIcon = styled(Image)`
  position: fixed;
  z-index: 101;
  top: 2rem;
  right: 2rem;
  cursor: pointer; ;
`;

const SocialIcon = styled(Image)`
  height: 3rem;
  width: 3rem;
`;
const SocialLink = styled(Link)`
  padding: 1rem;
  &:hover {
    background: #f0c871;
  }
`;

const SocialMediaIcons = styled.div`
  position: fixed;
  z-index: 150;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  border-radius: 1rem 0rem 0rem 1rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
`;

export default Layout;
