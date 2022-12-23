import Nav from "@components/navigation/Nav";
import Footer from "@components/footer/Footer";

import "@styles/globals.css";
import "@fontsource/roboto";

import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo/seo.config";

function MyApp({ Component, pageProps, router }) {
  const { openGraph, twitter } = SEO;

  return (
    <>
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
