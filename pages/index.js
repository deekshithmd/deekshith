import Head from "next/head";
import styled from "styled-components";
import { H1, H3 } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head></Head>
      <Container>
        <H3 fontSize="2.5rem" color="#fff">
          Hi There...
        </H3>
        <H1 fontSize="5rem" color="#fff">
          I am <span style={{ color: "#f9ca24" }}>Deekshith M D</span>
        </H1>
        <Description>
          I am a front end developer experienced in developing front end
          solutions using HTML,CSS,Javascipt{" "}
        </Description>
        <Link href="/contact">
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
  background: #111;
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0rem;
`;

const Button = styled.button`
  padding: 0.7rem 3rem;
  background: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 2rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  &:hover {
    background: #f9ca24;
  }
`;
