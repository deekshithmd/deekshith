import React from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import Link from "next/link";

export default function Navbar({ showMobileMenu }) {
  const theme = useTheme();
  return (
    <main>
      <HeaderContainer showMobileMenu={showMobileMenu}>
        <ProfileContainer>
          <ProfilImage>
            <Image
              src="/assets/deekshith.png"
              alt="Profile"
              layout="fill"
              objectFit="contain"
            />
          </ProfilImage>
          <Name>Deekshith M D</Name>
          <Post>Front End Developer</Post>
        </ProfileContainer>
        <NavigationBar>
          <ListContainer>
            <ListItem>
              <MenuItem href="/about">About</MenuItem>
            </ListItem>
            <ListItem>
              <MenuItem href="#">Projects</MenuItem>
            </ListItem>
            <ListItem>
              <MenuItem href="#">Skills</MenuItem>
            </ListItem>
            <ListItem>
              <MenuItem href="#">Experience</MenuItem>
            </ListItem>
            <ListItem>
              <MenuItem href="/contact">Contact</MenuItem>
            </ListItem>
          </ListContainer>
        </NavigationBar>
      </HeaderContainer>
    </main>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 35rem;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  @media (max-width: 981px) {
    left: ${(props) => (props.showMobileMenu ? "0" : " -120%")};
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilImage = styled.div`
  position: relative;
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 0.7rem solid #f9ca24;
  overflow: hidden;
`;

const Name = styled.h3`
  font-size: 3.5rem;
  color: #fff;
`;

const Post = styled.p`
  font-size: 2rem;
  color: #eee;
`;

const NavigationBar = styled.nav`
  width: 100%;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 1rem 3rem;
`;

const ListItem = styled.li``;

const MenuItem = styled(Link)`
  display: block;
  padding: 1rem;
  margin: 1.5rem 0;
  background: #333;
  color: #fff;
  font-size: 2rem;
  border-radius: 5rem;
  &:hover {
    background: #f9ca24;
  }
`;
