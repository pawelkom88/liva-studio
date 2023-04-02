import OfferBanner from "@components/offer/offer-banner/OfferBanner";
import OfferImage from "@components/offer/offer-image/OfferImage";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Hero from "@components/hero/Hero";
import PageSeo from "../../seo/PageSeo";
import { offerBannerData } from "@helpers/data";
import { createClient } from "contentful";
import { offerSeo } from "../../seo/seo";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "offer", select: "fields" });

  return {
    props: {
      offer: response.items,
    },
    revalidate: 60,
  };
}

export default function index({ offer }) {
  return (
    <>
      <PageSeo seo={offerSeo} />
      <Hero heroImg="bg-offer" heading="Our offer">
        Let us capture your unique story through the lens of our camera.
      </Hero>

      <Wrapper>
        <section className="xl:m-x-0 my-16 grid cursor-pointer grid-cols-1 gap-4 sm:mx-2 md:grid-cols-2 lg:grid-cols-3">
          {offer?.map(offer => {
            return <OfferImage key={offer.sys.id} offer={offer} />;
          })}
        </section>
      </Wrapper>
      <section className="grid w-full grid-cols-1 gap-4 bg-[color:var(--primary-clr)] py-16 md:grid-cols-4">
        {offerBannerData?.map(item => {
          return (
            <OfferBanner key={item.id} time={item.time} number={item.number} text={item.text}>
              {item.svg}
            </OfferBanner>
          );
        })}
      </section>
    </>
  );
}
