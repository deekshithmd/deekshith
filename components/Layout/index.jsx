import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Navbar"), { ssr: false });
import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <Container>
      <Navbar showMobileMenu={showMobileMenu} />
      <MenuContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <Image
          src={showMobileMenu ? "/assets/close.png" : "/assets/menu.png"}
          height={30}
          width={30}
          alt="menu"
        />
      </MenuContainer>
      <ThemeIcon
        src={isDarkTheme ? "/assets/sun.svg" : "/assets/moon.png"}
        height={30}
        width={30}
        alt="theme"
        onClick={() => toggleTheme()}
      />
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

export default Layout;
