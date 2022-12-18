import About from "@components/about/About";
import CallToAction from "@components/cta/CallToAction";
import Faq from "@components/faq/Faq";
import HeroSlider from "@components/hero/HeroSlider";
import OurOffer from "@components/our-offer/OurOffer";
import Press from "@components/press/Press";
import Wrapper from "@components/wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Wrapper>
        <About />
        <OurOffer />
        <Press />
        <Faq />
        <CallToAction />
      </Wrapper>
    </>
  );
}
