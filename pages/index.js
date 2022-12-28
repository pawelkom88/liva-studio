import HeroSlider from "@components/hero/HeroSlider";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Reviews from "@components/reviews/Reviews";
import PageSeo from "../seo/PageSeo";
import { mainPageSeo } from "../seo/seo";

import dynamic from "next/dynamic";

const DynamicOurOffer = dynamic(() => import("@components/our-offer/OurOffer"), {
  loading: () => "Loading...",
});

const DynamicReviews = dynamic(() => import("@components/reviews/Reviews"), {
  loading: () => "Loading...",
});

const DynamicPress = dynamic(() => import("@components/press/Press"), {
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
        <DynamicOurOffer />
        <DynamicReviews />
        <DynamicPress />
        <DynamicFaq />
        <DynamicCallToAction />
      </Wrapper>
    </>
  );
}
