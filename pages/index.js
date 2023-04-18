import HeroSlider from "@components/hero/HeroSlider";
import Wrapper from "@components/UI/wrapper/Wrapper";
import PortfolioOffer from "@components/portfolio/portfolio-offer/PortfolioOffer";
import PageSeo from "../seo/PageSeo";
import { mainPageSeo } from "../seo/seo";
import OurOffer from "@components/offer/our-offer/OurOffer";
import Reviews from "@components/reviews/Reviews";
import Press from "@components/press/Press";
import Faq from "@components/faq/Faq";
import CallToAction from "@components/cta/CallToAction";
import { createClient } from "contentful";
import AboutUs from "../components/about-us/AboutUs";

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
        <AboutUs />
        <PortfolioOffer />
        <OurOffer />
      </Wrapper>
      <Reviews reviews={reviews} />
      <Wrapper>
        {/* <Press /> */}
        <Faq />
        <CallToAction />
      </Wrapper>
    </>
  );
}
