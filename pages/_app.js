import Nav from "@components/navigation/Nav";
import Footer from "@components/footer/Footer";
import "../styles/globals.css";
import "@fontsource/figtree";

import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo/seo.config";

function MyApp({ Component, pageProps }) {
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

// export function reportWebVitals(metric) {
//   switch (metric.name) {
//     case "FCP":
//       // handle FCP results
//       break;
//     case "LCP":
//       // handle LCP results
//       break;
//     case "CLS":
//       // handle CLS results
//       break;
//     case "FID":
//       // handle FID results
//       break;
//     case "TTFB":
//       // handle TTFB results
//       break;
//     case "INP":
//       // handle INP results (note: INP is still an experimental metric)
//       break;
//     case "Next.js-hydration":
//       // handle hydration results
//       break;
//     case "Next.js-route-change-to-render":
//       // handle route-change to render results
//       break;
//     case "Next.js-render":
//       // handle render results
//       break;
//     default:
//       break;
//   }

//   const { name, value } = metric;
//   console.table(name, `${value / 1000}s`);
// }
