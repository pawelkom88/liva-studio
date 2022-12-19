import Nav from "@components/navigation/Nav";
import Footer from "@components/footer/Footer";

import "@styles/globals.css";
import "@fontsource/roboto";

import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo/seo.config";

import { AnimatePresence } from "framer-motion";
import PageTransition from "@components/UI/page-transition/PageTransition";

function MyApp({ Component, pageProps, router }) {
  const { openGraph, twitter } = SEO;

  return (
    <>
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <PageTransition transitionKey={router.route}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
