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
            I started my web development journey in 2021 by joining neogCamp, where I built multiple complex web applications using ReactJS and developed a strong foundation in frontend engineering. I then joined a Web3 startup, Push Protocol, as a Frontend Developer, contributing to multiple products including PushChat (1:1 chat, group chat, and video calls), the Analytics Dashboard, and the Push website. Later, I worked at Engineering Square, a Hyderabad-based startup building an end-to-end recruitment solution. There, I developed the test creation and assessment platform supporting MCQs, text input, video responses, and coding questions. I also integrated AI-driven features for job creation and candidate onboarding workflows and contributed to application performance optimization.    </Description>
          <Description>
            Most recently, I worked at SignEasy, a large-scale e-sign platform, where I owned and delivered multiple core frontend systems across repository management, global search, FTUX onboarding, growth experiments, API demo app. I built a Google Drive–like repository experience with advanced file and folder CRUD operations, bulk actions, drag-and-drop, keyboard interactions, along with a reusable folder manager abstraction used across product workflows. I led the development of a Slack-inspired global search with rich keyboard navigation and advanced filters, significantly improving discoverability across transactions, repositories, files, and templates. I also built FTUX onboarding and guided tour components to drive early feature adoption, delivered multiple growth and conversion experiments, integrated external systems like Google Drive, OneDrive, and Outlook Global Address Book, modernized legacy frontend codebases, and resolved major Webpack HMR and build performance issues, improving both product usability and developer productivity.
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
