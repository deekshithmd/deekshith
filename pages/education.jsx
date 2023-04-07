import styled, { useTheme } from "styled-components";
import { H1, H3, Span } from "@/styles/SharedStyling";
import Image from "next/image";

const Education = () => {
  const theme = useTheme();
  const eductionData = [
    {
      year: 2022,
      course: "Front End Development",
      description:
        "Joined web development bootcamp called neogCamp to learn fullstack web development and got specialized in frontend development using ReactJS",
    },
    {
      year: 2020,
      course: "B.E(CSE)",
      description:
        "Completed Bachelor of Engineering in Computer Science and Engineering with 8.95 CGPA",
    },
  ];
  return (
    <Container>
      <Header>
        <span style={{ color: theme.default.selected }}>My</span> Education
      </Header>
      <BoxContainer>
        {eductionData.map((education, index) => {
          return (
            <Box key={index}>
              <ImageContainer>
                <Image
                  src="/assets/graduate.png"
                  height={30}
                  width={30}
                  alt="icon"
                />
              </ImageContainer>
              <Year>{education.year}</Year>
              <Course>{education.course}</Course>
              <Description>{education.description}</Description>
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
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  padding-left: 3rem;
`;

const Box = styled.div`
  width: 27rem;
  margin: 4rem 1rem;
  padding-left: 4rem;
  border-left: 0.2rem solid ${(props) => props.theme.default.color};
  position: relative;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Year = styled(Span)`
  font-size: 1.3rem;
  background: ${(props) => props.theme.default.boxBackground};
  color: ${(props) => props.theme.default.color};
  border-radius: 5rem;
  padding: 0.5rem 2.5rem;
`;

const Course = styled(H3)`
  font-size: 2rem;
  color: ${(props) => props.theme.default.color};
  padding-top: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.default.heading};
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
  background: ${(props) => props.theme.default.selected};
`;

export default Education;
