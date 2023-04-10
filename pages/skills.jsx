import styled, { useTheme } from "styled-components";
import { H3, Header } from "@/styles/SharedStyling";
import Image from "next/image";
import { skillSet } from "@/utils/constants";

const Skills = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header fontWeight="600">
        <span style={{ color: theme.default.selected }}>My</span> Skills
      </Header>
      <BoxContainer>
        {skillSet.map((skill, index) => {
          return (
            <Box key={index}>
              <Pentagon>
                <Image src={skill.image} width={70} height={70} alt="skill" />
              </Pentagon>
            </Box>
          );
        })}
      </BoxContainer>
    </Container>
  );
};

const Pentagon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(235, 196, 86, 1) 100%
  );
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
`;

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
