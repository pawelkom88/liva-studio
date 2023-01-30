import OfferBanner from "@components/offer/offer-banner/OfferBanner";
import OfferImage from "@components/offer/offer-image/OfferImage";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Hero from "@components/hero/Hero";
import { offerBannerData } from "@helpers/data";
import { createClient } from "contentful";

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
      <Hero heroImg="bg-maternity" heading="Our offer">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, error?
      </Hero>

      <Wrapper>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4 cursor-pointer sm:mx-2 xl:m-x-0">
          {offer?.map(offer => {
            return <OfferImage key={offer.sys.id} offer={offer} />;
          })}
        </section>
      </Wrapper>
      <section className="w-full bg-[color:var(--primary-clr)] grid grid-cols-1 md:grid-cols-4 gap-4 py-16">
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
