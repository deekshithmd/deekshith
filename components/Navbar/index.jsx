import React from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { H3 } from "@/styles/SharedStyling";
import { useRouter } from "next/router";

export default function Navbar({ showMobileMenu, setShowMobileMenu }) {
  const theme = useTheme();
  const router = useRouter();
  const paths = [
    { link: "/about", name: "About" },
    { link: "/projects", name: "Projects" },
    { link: "/skills", name: "Skills" },
    { link: "/experience", name: "Experience" },
    { link: "/blogs", name: "Blogs" },
    { link: "/contact", name: "Contact" },
  ];
  return (
    <HeaderContainer showMobileMenu={showMobileMenu}>
      <ProfileContainer>
        <ProfileImage onClick={() => router.push("/")}>
          <Image
            src={`${process.env.ASSET_PATH}/assets/deekshith.png`}
            alt="Profile"
            layout="fill"
            objectFit="contain"
          />
        </ProfileImage>
        <Name>Deekshith M D</Name>
        <Post>Front End Developer</Post>
      </ProfileContainer>
      <NavigationBar>
        <ListContainer>
          {paths.map((item, index) => {
            return (
              <ListItem
                key={index}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MenuItem href={item.link}>{item.name}</MenuItem>
              </ListItem>
            );
          })}
        </ListContainer>
      </NavigationBar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  width: 35rem;
  background: ${(props) => props.theme.default.sidebarBackground};
  display: flex;
  flex-direction: column;
  text-align: center;
  &::-webkit-scrollbar {
    width: 0rem;
  }
  @media (max-width: 981px) {
    left: ${(props) => (props.showMobileMenu ? "0" : " -120%")};
    transition: all 0.5s;
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
  margin-top: 2rem;
`;

const ProfileImage = styled.div`
  position: relative;
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 0.7rem solid ${(props) => props.theme.default.selected};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.default.profileShadow};
  cursor: pointer;
`;

const Name = styled(H3)`
  font-size: 3.5rem;
  color: ${(props) => props.theme.default.color};
`;

const Post = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
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
  background: ${(props) => props.theme.default.secondaryBackground};
  color: ${(props) => props.theme.default.color};
  font-size: 2rem;
  border-radius: 5rem;
  box-shadow: ${(props) => props.theme.default.boxShadow};
  &:hover {
    background: ${(props) => props.theme.default.selected};
    color: #fff;
  }
`;
