import styled from "styled-components";
import { H1, H3, Span, Button } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <Container>
      <Header>
        <span style={{ color: "#f9ca24" }}>Contact</span> me
      </Header>
      <DataRow>
        <ContactInfo>
          <Heading>Contact Info</Heading>
          <Info>
            <ContactData>
              <Icon src="/assets/mail.png" height={30} width={30} alt="phone" />
              deekshithmogra@gmail.com
            </ContactData>
            <ContactData>
              <Icon src="/assets/phone.png" height={30} width={30} alt="mail" />
              +917975507889
            </ContactData>
            <ContactData>
              <Icon
                src="/assets/location.png"
                height={30}
                width={30}
                alt="location"
              />
              Mangaluru, Karnataka, India 574218
            </ContactData>
          </Info>
        </ContactInfo>
        <Form>
          <Input type="text" placeholder="name" />

          <Input type="email" placeholder="email" />

          <Input type="text" placeholder="project" />

          <Message name="" id="" cols="30" rows="10" placeholder="messaage" />

          <Button type="submit">
            Send
            <Icon
              src="/assets/send.png"
              height={30}
              width={30}
              alt="mail"
              paddingLeft="10px"
            />
          </Button>
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

const Heading = styled(H3)`
  text-transform: uppercase;
  color: #fff;
  font-size: 3rem;
  padding-bottom: 2rem;
`;

const Info = styled.div``;

const Icon = styled(Image)`
  padding-right: 1rem;
  padding-left: ${(props) => props.paddingLeft || "0px"};
`;

const ContactData = styled(H3)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0;
  font-weight: normal;
  text-transform: lowercase;
`;

const Form = styled.form`
  flex: 1 1 45rem;
  padding: 4rem;
  margin: 2rem;
  padding-bottom: 0;
  @media (max-width: 480px) {
    margin: 3rem 0rem;
  }
`;

const Input = styled.input`
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  background: #3333;
  color: #fff;
  text-transform: non;
  font-size: 1.7rem;
  width: 100%;
  &::placeholder {
    text-transform: capitalize;
  }
`;

const Message = styled.textarea`
  height: 15rem;
  resize: none;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  background: #3333;
  color: #fff;
  text-transform: non;
  font-size: 1.7rem;
  width: 100%;
`;

export default Contact;
