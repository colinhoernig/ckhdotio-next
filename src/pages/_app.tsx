import { AppProps } from "next/app";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
