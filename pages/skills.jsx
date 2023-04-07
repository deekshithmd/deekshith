import styled, { useTheme } from "styled-components";
import { H1 } from "@/styles/SharedStyling";
import Image from "next/image";

const Skills = () => {
  const theme = useTheme();
  const skillSet = [
    {
      skill: "HTML",
      image: "/assets/skills/html.png",
    },
    {
      skill: "CSS",
      image: "/assets/skills/css.png",
    },
    {
      skill: "Javascript",
      image: "/assets/skills/javascript.png",
    },
    {
      skill: "ReactJS",
      image: "/assets/skills/react.png",
    },
    {
      skill: "NextJS",
      image: "/assets/skills/nextjs.png",
    },
    {
      skill: "Github",
      image: "/assets/skills/github.png",
    },
    {
      skill: "Material UI",
      image: "/assets/skills/mui.png",
    },
    {
      skill: "Firbase",
      image: "/assets/skills/firebase.png",
    },
    {
      skill: "Tailwind CSS",
      image: "/assets/skills/tailwind.png",
    },
  ];
  return (
    <Container>
      <Header>
        <span style={{ color: theme.default.selected }}>My</span> Skills
      </Header>
      <BoxContainer>
        {skillSet.map((skill, index) => {
          return (
            <Box key={index}>
              <Image src={skill.image} width={70} height={70} alt="skill" />
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
    justify-content: flex-start;
    margin-left: 0;
    padding: 0 2rem;
    padding-top: 10rem;
    min-height: 90vh;
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

const Box = styled.div`
  height: fit-content;
  width: fit-content;
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
`;

export default Skills;
