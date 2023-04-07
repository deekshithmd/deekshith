import Head from "next/head";
import styled, { useTheme } from "styled-components";
import { H1, H3, Button } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head></Head>
      <Container>
        <H3 fontSize="2.5rem" color={theme.default.color}>
          Hi There...
        </H3>
        <H1 fontSize="5rem" color={theme.default.color}>
          I am <span style={{ color: "#f9ca24" }}>Deekshith M D</span>
        </H1>
        <Description>
          I am a front end developer experienced in developing front end
          solutions using HTML,CSS,Javascipt{" "}
        </Description>
        <Link href="/about">
          <Button>
            About Me
            <Image
              src="/assets/profile.png"
              width={30}
              height={30}
              alt="icon"
              style={{ padding: "0rem .5rem" }}
            />
          </Button>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 15rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem 0rem;
`;
