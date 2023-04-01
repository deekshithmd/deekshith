import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deekshith M D</title>
        <meta name="description" content="Dekshith M D Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/deekshith.png" />
      </Head>
      <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </>
  );
}
