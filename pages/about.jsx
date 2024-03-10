/* eslint-disable react/no-unescaped-entities */
import styled, { useTheme } from "styled-components";
import { H3, Button, Header, HeaderContainer } from "@/styles/SharedStyling";
import Image from "next/image";

const About = () => {
  const theme = useTheme();

  return (
    <Container>
      <HeaderContainer>
        <Header fontWeight="600">
          <span style={{ color: theme.default.selected }}>About</span> me
        </Header>
      </HeaderContainer>
      <DataRow>
        <Info>
          <Description>
            I'm a Frontend Developer located in India. I have experience in building web applications specifically front end solutions for the web applications. I have a serious passion for UI develpoment and creating intuitive, dynamic user experiences.
          </Description>
          <Description>
            I started my web development journey back in 2021 and joined neogCamp to learn front end development, there I learnt web development by building various complex web applications using ReactJS. Later I joined a web3 startup Push Protocol as a Front End Developer, here I worked on multiple products of Push Protocol like PushChat(chat, group chat and video call), Analytics Dashboard and Push website. Currently working as a frontend developer in Engineering Square a startup in Hyderabad, where we are working on end to end recruitment solution product, here I have developed the test creation and assesment platform which consists of mcq, text input, video response and coding questions, integrated AI capability for some of the features like job creation and candidate onboarding flow, also I have worked on improving the performance of the application.
          </Description>
          <DownloadItem href="file/Deekshith.pdf" download>
            <Button>
              Resume
              <Image
                src="/assets/download.png"
                width={40}
                height={30}
                alt="icon"
                style={{ padding: "0rem .5rem" }}
              />
            </Button>
          </DownloadItem>
        </Info>
      </DataRow>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
    justify-content: flex-start;
  }
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const Info = styled.div`
  flex: 1 1 48rem;
  padding: 2rem 1rem;
`;

const Description = styled(H3)`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem 0;
  font-weight: normal;
  text-align: justify;
`;

const DownloadItem = styled.a`
  max-width: 50px;
`;

export default About;
