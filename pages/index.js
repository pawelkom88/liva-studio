import HeroSlider from "@components/hero/HeroSlider";
import Wrapper from "@components/UI/wrapper/Wrapper";
import PortfolioOffer from "@components/portfolio/portfolio-offer/PortfolioOffer";
import PageSeo from "../seo/PageSeo";
import { mainPageSeo } from "../seo/seo";

import dynamic from "next/dynamic";

const DynamicOurOffer = dynamic(() => import("@components/offer/our-offer/OurOffer"), {
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

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "reviews", select: "fields" });

  return {
    props: {
      reviews: response.items,
    },
    revalidate: 60,
  };
}

export default function Home({ reviews }) {
  return (
    <>
      <PageSeo seo={mainPageSeo} />
      <HeroSlider />
      <Wrapper>
        <PortfolioOffer />
        <DynamicOurOffer />
      </Wrapper>
      <DynamicReviews reviews={reviews} />
      <Wrapper>
        <DynamicPress />
        <DynamicFaq />
        <DynamicCallToAction />
      </Wrapper>
    </>
  );
}
