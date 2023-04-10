/* eslint-disable react/no-unescaped-entities */
import styled, { useTheme } from "styled-components";
import { H3, Header, HeaderContainer } from "@/styles/SharedStyling";

const About = () => {
  const theme = useTheme();

  // hashnode token - 411fb204-d163-45d7-8724-02e9afcace24

  return (
    <Container>
      <HeaderContainer>
        <Header fontWeight="600">
          <span style={{ color: theme.default.selected }}>My</span> Blogs
        </Header>
      </HeaderContainer>
      <BlogContainer>
        <BlogCard>
          <Description>Coming up...</Description>
        </BlogCard>
      </BlogContainer>
    </Container>
  );
};

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
  }
`;

const BlogContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const BlogCard = styled.div`
  width: 40rem;
  height: 20rem;
  border-radius: 2rem;
  border: 1px solid black;
`;

const Description = styled(H3)`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem 0;
  font-weight: normal;
  text-align: justify;
`;

export default About;
