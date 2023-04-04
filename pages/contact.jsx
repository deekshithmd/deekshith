import styled from "styled-components";
import { H1, H3, Span } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <Container>
      <Header>
        <span style={{ color: "#f9ca24" }}>Contact</span>{" "}
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Header>
      <DataRow>
        <ContactInfo>
          <Heading>Contact Info</Heading>
          <Info>
            <H3>deekshithmogra@gmail.com</H3>
            <H3>+917975507889</H3>
            <H3>Mangaluru, Karnataka, India -574218</H3>
          </Info>
        </ContactInfo>
        <Form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="project" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="messaage"
          ></textarea>
          <button type="submit">Send</button>
        </Form>
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
  background: #111;
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
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
  @media (max-width: 480px) {
    margin: 0 3rem;
  }
`;
const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  flex: 1 1 30rem;
  padding: 4rem;
  padding-bottom: 0;
`;

const Heading = styled(H3)``;

const Info = styled.div``;

const Form = styled.form`
  flex: 1 1 45rem;
  padding: 4rem;
  margin: 2rem;
  padding-bottom: 0;
`;

export default Contact;
