import Wrapper from "@components/UI/wrapper/Wrapper";
import Hero from "@components/hero/Hero";
import PricingCard from "@components/pricing/PricingCard";
import SkeletonLoader from "@components/UI/skeleton/Skeleton";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "offer" });

  const paths = response.items.map(item => {
    return {
      params: { slug: item?.fields?.slug },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "offer",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return { props: { offerDetails: items[0] }, revalidate: 60 };
}

export default function Package({ offerDetails }) {
  if (!offerDetails) return <SkeletonLoader />;

  const { title, description, packageDetails, packageIntro, packagePrice, goldPackage,bronzePackage,silverPackage, image } =
    offerDetails?.fields;
  const { url } = image.fields?.file;

  const cardData = {
    id: title,
    intro: packageIntro,
    details: [
      {
        id: 1,
        name: packageDetails[0],
        price: +packagePrice[0],
        content: bronzePackage,
      },
      { id: 2, name: packageDetails[1], price: +packagePrice[1], content: goldPackage },
      { id: 3, name: packageDetails[2], price: +packagePrice[2], content: silverPackage },
    ],
  };

  return (
    <>
      <Hero backgroundImage={`url(${"https:" + url})`} heading={title} />
      <Wrapper>
        <section className="mt-16">
          <h1 className="heading-styles text-center my-8">Package details</h1>
          <p className="text-center">{description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
            {cardData.details.map(offer => {
              return <PricingCard key={offer.id} offerPackage={offer} />;
            })}
          </div>
        </section>
      </Wrapper>
      ;
    </>
  );
}
