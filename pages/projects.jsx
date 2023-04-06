import styled from "styled-components";
import { H1 } from "@/styles/SharedStyling";
import Image from "next/image";

const Projects = () => {
  return (
    <Container>
      <Header>
        <span style={{ color: "#f9ca24" }}>My</span> Projects
      </Header>
      <BoxContainer>
        <Box>
          <Image
            src="/assets/freshbuy.png"
            width={300}
            height={200}
            alt="project"
          />
        </Box>
        <Box>
          <Image
            src="/assets/freshnote.png"
            width={300}
            height={200}
            alt="project"
          />
        </Box>
        <Box>
          <Image
            src="/assets/freshquiz.png"
            width={300}
            height={200}
            alt="project"
          />
        </Box>
        <Box>
          <Image
            src="/assets/freshui.png"
            width={300}
            height={200}
            alt="project"
          />
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
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const Box = styled.div`
  height: 20rem;
  width: 30rem;
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
`;

export default Projects;
