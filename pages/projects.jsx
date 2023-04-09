import styled, { useTheme } from "styled-components";
import { H1, H3, Span, Button, Header } from "@/styles/SharedStyling";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constants";

const Projects = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header fontWeight="600">
        <span style={{ color: theme.default.selected }}>My</span> Projects
      </Header>
      <BoxContainer>
        {projects.map((project) => {
          return (
            <Box key={project.id}>
              <ProjectContent>
                <ImageContainer>
                  <ProjectImage
                    src={project.image}
                    width={300}
                    height={150}
                    alt="project"
                  />
                </ImageContainer>
                <ProjectDetails>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ButtonContainer>
                    <LinkButton href={project.project} target="_blank">
                      Project
                    </LinkButton>
                    <LinkButton href={project.source} target="_blank">
                      Source Code
                    </LinkButton>
                  </ButtonContainer>
                </ProjectDetails>
              </ProjectContent>
            </Box>
          );
        })}
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
  color: ${(props) => props.theme.default.color};
`;

const ProjectDescription = styled(Span)`
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
  color: ${(props) => props.theme.default.color};
  text-align: center;
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
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid #fff;
  color: ${(props) => props.theme.default.color};
  &:hover {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 2;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: 15rem;
  width: 30rem;
`;

const ProjectContent = styled.div`
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const ProjectDetails = styled.div`
  position: absolute;
  z-index: 1;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  height: 15rem;
  width: 30rem;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.default.projectCardBackground};
`;

const Box = styled.div`
  height: 15rem;
  width: 30rem;
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  perspective: 1000px;
  &:hover ${ProjectContent} {
    transform: rotateY(180deg);
  }
`;

export default Projects;
