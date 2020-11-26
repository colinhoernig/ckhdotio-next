import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Colin Hoernig - Arvada, CO - Engineering Manager, Developer, Tech
          Enthusiast
        </title>
        <meta
          name="description"
          content="ckhdotio - the personal homepage of Colin Hoernig, a software engineering manager at Tackle.io"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
