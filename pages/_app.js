import { ThemeProvider } from "@/contexts/ThemeContext";
import Theme from "../theme/Theme";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Theme>
        <Head>
          <title>Deekshith M D</title>
          <meta name="description" content="Dekshith M D Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="assets/deekshith.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </ThemeProvider>
  );
}
