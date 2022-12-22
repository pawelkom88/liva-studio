import About from "@components/about/About";
import CallToAction from "@components/cta/CallToAction";
import Faq from "@components/faq/Faq";
import HeroSlider from "@components/hero/HeroSlider";
import OurOffer from "@components/our-offer/OurOffer";
import Press from "@components/press/Press";
import Wrapper from "@components/UI/wrapper/Wrapper";

import PageSeo from "../seo/PageSeo";
import { mainPageSeo } from "../seo/seo";

import dynamic from "next/dynamic";

const DynamicOurOffer = dynamic(() => import("@components/our-offer/OurOffer"), {
  loading: () => "Loading...",
});

const DynamicPress = dynamic(() => import("@components/our-offer/OurOffer"), {
  loading: () => "Loading...",
});

const DynamicFaq = dynamic(() => import("@components/faq/Faq"), {
  loading: () => "Loading...",
});

const DynamicCallToAction = dynamic(() => import("@components/cta/CallToAction"), {
  loading: () => "Loading...",
});

export default function Home() {
  return (
    <>
      <PageSeo seo={mainPageSeo} />
      <HeroSlider />
      <Wrapper>
        <About />
        <DynamicOurOffer />
        <DynamicPress />
        <DynamicFaq />
        <DynamicCallToAction />
      </Wrapper>
    </>
  );
}
