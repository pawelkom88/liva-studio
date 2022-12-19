import About from "@components/about/About";
import CallToAction from "@components/cta/CallToAction";
import Faq from "@components/faq/Faq";
import HeroSlider from "@components/hero/HeroSlider";
import OurOffer from "@components/our-offer/OurOffer";
import Press from "@components/press/Press";
import Wrapper from "@components/UI/wrapper/Wrapper";
import PageSeo from "../seo/PageSeo";

import { mainPageSeo } from "../seo/seo";

export default function Home() {
  return (
    <>
      <PageSeo seo={mainPageSeo} />
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
