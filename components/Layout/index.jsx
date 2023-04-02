import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Navbar"), { ssr: false });
import styled from "styled-components";
import Image from "next/image";

const Layout = ({ children }) => {
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
  right: 2rem;
  display: none;
  cursor: pointer;
  @media (max-width: 981px) {
    display: block;
  }
`;

export default Layout;
