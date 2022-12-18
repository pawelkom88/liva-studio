import Nav from "@components/navigation/Nav";
import Footer from "@components/footer/Footer";

import "@styles/globals.css";
import "@fontsource/roboto";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
