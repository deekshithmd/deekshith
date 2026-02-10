/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styled, { useTheme } from "styled-components";
import { H1, Button } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head></Head>
      <Container>
        <Heading
          fontSize="5rem"
          fontWeight="800"
          color={theme.default.color}
          textTransform="uppercase"
        >
          Hey, I'm{" "}
          <span style={{ color: theme.default.selected }}>Deekshith M D</span>
        </Heading>
        <Description>
          A Frontend Engineer building front end solutions for websites and
          web applications using Javascript Techstack.
        </Description>
        <LinkContainer>
          <Link href="/about">
            <Button>
              About Me
              <Image
                src="/assets/profile.png"
                width={40}
                height={30}
                alt="icon"
                style={{ padding: "0rem .5rem" }}
              />
            </Button>
          </Link>
        </LinkContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 15rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Heading = styled(H1)`
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 3rem;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem 0rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
