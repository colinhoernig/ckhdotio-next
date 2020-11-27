import { AppProps } from "next/app";
import Head from "../components/Head";
import "../styles/index.css";

const TITLE =
  "ckhdotio - Colin Hoernig - musings of an engineering manager, developer, and tech enthusiast";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
