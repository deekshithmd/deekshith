import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deekshith M D</title>
        <meta name="description" content="Dekshith M D Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/deekshith.png" />
      </Head>
      <main>
        <header>
          <div>
            <Image
              src="/assets/deekshith.png"
              alt="Profile"
              width={100}
              height={100}
            />
            <Name>Deekshith M D</Name>
            <p>Front End Developer</p>
          </div>
          <nav>
            <ul>
              <ListItem>
                <Link href="#">About</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Projects</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Skills</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Contact</Link>
              </ListItem>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
}

const Name = styled.h3`
  font-size: 24px;
  color: #000;
  font-weight: 600;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 10px 20px;
  border-radius: 20px;
  width: 100px;
  background: red;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;
