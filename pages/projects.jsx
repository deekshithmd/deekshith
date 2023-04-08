import styled, { useTheme } from "styled-components";
import { H1, H3, Span, Button } from "@/styles/SharedStyling";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <span style={{ color: theme.default.selected }}>My</span> Projects
      </Header>
      <BoxContainer>
        <Box>
          <ProjectImage
            src="/assets/freshbuy.png"
            width={300}
            height={150}
            alt="project"
          />
          <ProjectDetails>Details</ProjectDetails>
        </Box>
        <Box>
          <ProjectImage
            src="/assets/freshnote.png"
            width={300}
            height={150}
            alt="project"
          />
          <ProjectDetails>Details</ProjectDetails>
        </Box>
        <Box>
          <ProjectImage
            src="/assets/freshquiz.png"
            width={300}
            height={150}
            alt="project"
          />
          <ProjectDetails>Details</ProjectDetails>
        </Box>
        <Box>
          <ImageContainer>
            <ProjectImage
              src="/assets/freshui.png"
              width={300}
              height={150}
              alt="project"
            />
          </ImageContainer>
          <ProjectDetails>
            <ProjectContent>
              <ProjectTitle>FreshUI</ProjectTitle>
              <ProjectDescription>
                This is a Component library similar to Bootstrap/Tailwind CSS
                developed using pure CSS, HTML and javascript.
              </ProjectDescription>
              <ButtonContainer>
                <LinkButton href="/">Project</LinkButton>
                <LinkButton href="/">Source</LinkButton>
              </ButtonContainer>
            </ProjectContent>
          </ProjectDetails>
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
  background: ${(props) => props.theme.default.background};
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
  border-bottom: 0.1rem solid ${(props) => props.theme.default.border};
  color: ${(props) => props.theme.default.color};
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

const ProjectTitle = styled(H3)`
  font-size: 2rem;
  font-weight: 500;
`;

const ProjectDescription = styled(Span)`
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const LinkButton = styled(Link)`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
`;

const ProjectContent = styled.div`
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const Box = styled.div`
  height: 15rem;
  width: 30rem;
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
  background-color: transparent;
  &:hover ${ProjectContent} {
    transform: rotateY(180deg);
  }
`;

const ProjectDetails = styled.div`
  height: 15rem;
  width: 30rem;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.default.projectCardBackground};
  position: absolute;
  backface-visibility: hidden;
  z-index: 1;
  transform: rotateY(180deg);
`;

const ImageContainer = styled.div`
  height: 15rem;
  width: 30rem;
  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
`;

export default Projects;
