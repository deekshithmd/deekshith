import styled from "styled-components";
import { H1, H3, Span } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const Education = () => {
  return (
    <Container>
      <Header>
        <span style={{ color: "#f9ca24" }}>My</span> Education
      </Header>
      <BoxContainer>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/graduate.png"
              height={30}
              width={30}
              alt="icon"
            />
          </ImageContainer>
          <Year>2016</Year>
          <Course>Front End Development</Course>
          <Description>
            Completed frontend develope=ment bootcamp to learn web development
            to get job in industry
          </Description>
        </Box>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 2rem;
  background: #111;
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const Header = styled(H1)`
  text-align: center;
  margin: 0 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
  @media (max-width: 480px) {
    margin: 0 3rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  padding-left: 3rem;
`;

const Box = styled.div`
  width: 27rem;
  margin: 4rem 1rem;
  padding-left: 4rem;
  border-left: 0.2rem solid #fff;
  position: relative;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Year = styled(Span)`
  font-size: 1.3rem;
  background: #222;
  color: #fff;
  border-radius: 5rem;
  padding: 0.5rem 2.5rem;
`;

const Course = styled(H3)`
  font-size: 2rem;
  color: #fff;
  padding-top: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #eee;
  padding: 1rem 0;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -1.5rem;
  left: -2.5rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: fex;
  align-items: center;
  justify-content: center;
  background: #f9ca24;
`;

export default Education;
