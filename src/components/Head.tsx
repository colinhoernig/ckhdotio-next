import { FunctionComponent } from "react";
import NextHead from "next/head";

const Head: FunctionComponent = ({ children }) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {children}
    </NextHead>
  </>
);

export default Head;
