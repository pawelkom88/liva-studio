import About from "@components/about/About";
import Faq from "@components/faq/Faq";
import Footer from "@components/footer/Footer";
import HeroSlider from "@components/hero/HeroSlider";
import Nav from "@components/navigation/Nav";
import OurOffer from "@components/our-offer/OurOffer";
import Press from "@components/press/Press";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSlider />
      <main className="max-w-7xl mx-auto px-4 sm:p-0">
        <About />
        <OurOffer />

        <Press />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
