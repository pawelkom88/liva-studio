import Wrapper from "@components/UI/wrapper/Wrapper";
import Hero from "@components/hero/Hero";
import PricingCard from "@components/pricing/PricingCard";
import PageSeo from "../../seo/PageSeo";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

function paragraphClass(node) {
  const className = "max-w-readable mx-auto my-2 indent-3.5";
  return className;
}

function headingClass(node) {
  const className = "text-xl font-bold max-w-2xl mx-auto";
  return className;
}

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={paragraphClass(node)}>{children}</p>;
    },
  },
};

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
  const {
    title,
    description,
    packageDetails,
    packageIntro,
    packagePrice,
    goldPackage,
    bronzePackage,
    silverPackage,
    image,
  } = offerDetails?.fields;
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

  const individualOfferSeo = {
    pageDescription: `Explore our fantastic ${title} packages for every occasion. Affordable prices and friendly atmosphere`,
    canonical: `offer/${title}`,
    url: `offer/${title}`,
    title: `Liva Studio - ${title} photoshoot offer`,
    description: `Explore our fantastic ${title} packages for every occasion. Affordable prices and friendly atmosphere`,
  };

  return (
    <>
      <PageSeo seo={individualOfferSeo} />
      <Hero backgroundImage={`url(${"https:" + url})`} heading={title} />
      <Wrapper>
        <section className="mx-auto mt-16">
          <h1 className="heading-styles my-8 text-center">Package details</h1>
          <div className="mx-4">{documentToReactComponents(description, options)}</div>
          <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
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
