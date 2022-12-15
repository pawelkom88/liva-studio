import About from "../components/about/About";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import HeroSlider from "../components/hero/HeroSlider";
import Nav from "../components/Nav";
import Offer from "../components/offer/Offer";
import Press from "../components/press/Press";

export default function Home() {
  const gridItemsOrder = {
    first: "order-1",
    second: "order-2",
  };

  const gridItemsOrderReversed = {
    first: gridItemsOrder.second,
    second: gridItemsOrder.first,
  };

  return (
    <>
      <Nav />
      <HeroSlider />
      <About />
      <Offer order={gridItemsOrder} />
      <Offer order={gridItemsOrderReversed} />
      <Offer order={gridItemsOrder} />
      <Press />
      <Faq />
      <Footer />
    </>
  );
}
