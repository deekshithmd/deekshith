import styled from "styled-components";
import { H1, H3 } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Header>
        <span style={{ color: "#f9ca24" }}>About</span> me
      </Header>
      <div>
        <div>
          <H3>
            <span>name:</span>Deekshith M D
          </H3>
          <H3>
            <span>age:</span>24
          </H3>
          <H3>
            <span>qualification:</span>B.E(CSE)
          </H3>
          <H3>
            <span>post:</span>front end developer
          </H3>
          <Link href="/files/Deekshith_M_D.pdf" download>
            <Button>
              Resume
              <Image
                src="/assets/download.png"
                width={30}
                height={30}
                alt="icon"
                style={{ padding: "0rem .5rem" }}
              />
            </Button>
          </Link>
        </div>
        <div>
          <Box>
            <span>2</span>
            <H3>Years of experience</H3>
          </Box>
          <Box>
            <span>10+</span>
            <H3>Projects</H3>
          </Box>
        </div>
      </div>
    </Container>
  );
};

const Header = styled(H1)`
  text-align: center;
  margin: 0 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
`;

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

const Box = styled.div``;

export default About;
