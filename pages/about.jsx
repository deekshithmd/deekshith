/* eslint-disable react/no-unescaped-entities */
import styled, { useTheme } from "styled-components";
import { H1, H3, Span, Button, Header } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header fontWeight="600">
        <span style={{ color: theme.default.selected }}>About</span> me
      </Header>
      <DataRow>
        <Info>
          <Description>
            I'm a Frontend Developer located in India. I work on building Web
            Applications specifically front end solutions for the web
            aplications. I have a serious passion for UI develpoment and
            creating intuitive, dynamic user experiences.
          </Description>
          <Description>
            I started my web development journey back in 2021 and joined
            neogCamp to learn front end development, there I learnt web
            development by building various complex web applications using
            ReactJS. Later I joined a web3 startup called Push Protocol and
            working there as Front End Developer
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
  justify-content: center;
  flex-flow: column;
  padding: 0 2rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const Box = styled.div`
  width: 15rem;
  background: ${(props) => props.theme.default.boxBackground};
  text-align: center;
  padding: 2rem;
  margin: 2rem;
  box-shadow: ${(props) => props.theme.default.boxInsetShadow};
  @media (max-width: 480px) {
    width: 100%;
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
  padding-left: 6rem;
`;

const Description = styled(H3)`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem 0;
  font-weight: normal;
`;

const BoxContainer = styled.div`
  flex: 1 1 48rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DownloadItem = styled.a`
  width: 100px;
`;

export default About;
