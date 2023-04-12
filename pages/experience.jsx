import React, { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";
import { H1, H3, Span, Header, HeaderContainer } from "@/styles/SharedStyling";
import { experienceData } from "@/utils/constants";

const Experience = () => {
  const theme = useTheme();
  const [experienceId, setExperienceId] = useState();

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <span style={{ color: theme.default.selected }}>My</span> Experience
        </Header>
      </HeaderContainer>
      <BoxContainer>
        {experienceData.map((experience) => {
          return (
            <ExperienceContainer key={experience.id}>
              <ExperienceTab>
                <H3 fontWeight="600" fontSize="2rem" color="#fff">
                  {experience.role} @{experience.company}
                </H3>
                <InnerItem>
                  <H3 fontWeight="600" fontSize="1.5rem" color="#fff">
                    {experience.duration}
                  </H3>
                  <ShowIcon
                    color="#fff"
                    fontSize="3rem"
                    onClick={() =>
                      setExperienceId(
                        experience.id == experienceId ? 0 : experience.id
                      )
                    }
                  >
                    {experienceId == experience.id ? "-" : "+"}
                  </ShowIcon>
                </InnerItem>
              </ExperienceTab>

              {experienceId == experience.id && (
                <ExpereinceDetails>
                  <ExperienceData>{experience.description}</ExperienceData>
                  <ExperienceStack>
                    {experience.skills.map((skill, index) => {
                      return <Technology key={index}>{skill}</Technology>;
                    })}
                  </ExperienceStack>
                </ExpereinceDetails>
              )}
            </ExperienceContainer>
          );
        })}
      </BoxContainer>
    </Container>
  );
};

const Technology = styled(Span)`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  forn-weight: 700;
  margin: 0 0.5rem 0.5rem 0;
`;

const ExperienceStack = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ExperienceData = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: justify;
  color: #fff;
  margin-bottom: 1rem;
`;

const animationSet1 = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
`;

const animationSet2 = keyframes`
    0% {
        transform: translateY(-30%);
    }
    100% {
        transform: translateY(0);
    }
`;

const ExpereinceDetails = styled.div`
  width: 70rem;
  background: ${(props) => props.theme.default.selected};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem;
  animation-name: ${animationSet1};
  animation-duration: 2s;
  animation-iteration-count: 1;
  margin: 1rem 0;
  @media (max-width: 480px) {
    width: 30rem;
    animation-name: ${animationSet2};
    animation-duration: 1s;
  }
`;

const InnerItem = styled(Span)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ShowIcon = styled(H1)`
  margin-left: 3rem;
  cursor: pointer;
  min-width: 2rem;
`;

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 5rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
    justify-content: flex-start;
  }
`;

const ExperienceContainer = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceTab = styled.div`
  position: relative;
  z-index: 9;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.default.selected};
  padding: 1.5rem;
  @media (max-width: 480px) {
    width: 30rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin-top: 5rem;
`;

export default Experience;
