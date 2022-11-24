import { AppProps } from "next/app";
import Head from "../components/Head";
import "../styles/index.css";
import { Source_Sans_Pro } from '@next/font/google';

const TITLE =
  "ckhdotio - Colin Hoernig - musings of an engineering manager, developer, and tech enthusiast";

const font = Source_Sans_Pro({weight:"400", subsets:["latin"]});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
