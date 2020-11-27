import { FunctionComponent } from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

const Head: FunctionComponent = ({ children }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {children}
    </NextHead>
  </>
);

export default Head;
