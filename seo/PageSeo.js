import { NextSeo } from "next-seo";

export default function PageSeo({ seo }) {
  const {
    pageTitle,
    pageDescription,
    canonical,
    url,
    OpenGraphTitle,
    OpenGraphDescription,
    openGraphImageUrl,
  } = seo;

  return (
    <NextSeo
      title={pageTitle}
      description={pageDescription}
      canonical={canonical}
      openGraph={{
        url,
        title: OpenGraphTitle,
        description: OpenGraphDescription,
        images: { url: openGraphImageUrl },
      }}
    />
  );
}
