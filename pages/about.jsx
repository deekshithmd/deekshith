import styled, { useTheme } from "styled-components";
import { H1, H3, Span, Button } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <span style={{ color: theme.default.selected }}>About</span> me
      </Header>
      <DataRow>
        <Info>
          <Field>
            <FieldName>name:</FieldName>Deekshith M D
          </Field>
          <Field>
            <FieldName>age:</FieldName>24
          </Field>
          <Field>
            <FieldName>qualification:</FieldName>B.E(CSE)
          </Field>
          <Field>
            <FieldName>post:</FieldName>front end developer
          </Field>
          <Link href="/files/Deekshith_M_D.pdf" download>
            <Button>
              Resume
              <Image
                src="/assets/download.png"
                width={30}
                height={30}
                alt="icon"
                style={{ padding: "0rem .5rem" }}
              />
            </Button>
          </Link>
        </Info>
        <BoxContainer>
          <Box>
            <Span fontSize="4rem" color="#f9ca24">
              2
            </Span>
            <H3 fontSize="2rem" color="#f9ca24">
              Years of experience
            </H3>
          </Box>
          <Box>
            <Span fontSize="4rem" color="#f9ca24">
              10+
            </Span>
            <H3 fontSize="2rem" color="#f9ca24">
              Projects
            </H3>
          </Box>
        </BoxContainer>
      </DataRow>
    </Container>
  );
};

const Header = styled(H1)`
  text-align: center;
  margin: 0 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
  @media (max-width: 480px) {
    margin: 0 3rem;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 2rem;
  background: #111;
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`;

const Box = styled.div`
  width: 15rem;
  background: #222;
  text-align: center;
  padding: 2rem;
  margin: 2rem;
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

const Field = styled(H3)`
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0;
  font-weight: normal;
`;

const FieldName = styled.span`
  color: #f9ca24;
  padding: 0 0.5rem;
`;

const BoxContainer = styled.div`
  flex: 1 1 48rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default About;
