import { NextSeo } from "next-seo";
import Script from "next/script";

const defaultSEO = {
  canonical: "",
  url: "",
  title:
    "Liva Studio - photography brand specialising in newborn, maternity, and wedding photography",
  description:
    "Based in Bristol, England, Liva Studio is a photography brand specialising in newborn, maternity, and wedding photography. We’re obsessed with documenting and preserving life’s special moments by combining beautiful pictures and cutting-edge technology to create blissful memories for our clients.",
};

export default function PageSeo({ seo = defaultSEO }) {

  console.log(seo.title)

  const jsonData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "https://livastudio.co.uk/",
    "description": "Based in Bristol, England, Liva Studio is a photography brand specialising in newborn, maternity, and wedding photography. We’re obsessed with documenting and preserving life’s special moments by combining beautiful pictures and cutting-edge technology to create blissful memories for our clients.",
    "image": "https://livastudio.co.uk/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=96&q=75",
    "logo": "https://livastudio.co.uk/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=96&q=75",
    "url": "https://livastudio.co.uk/",
    "sameAs": ["https://www.facebook.com/livastudio1/", "https://www.instagram.com/livastudios/"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wallingford Rd",
      "addressLocality": "Bristol",
      "postalCode": "BS4 1SW",
      "addressCountry": "United Kingdom"
    }
  }

  return (
    <>
      <NextSeo
        // additionalLinkTags={favicon}
        title={`${seo.title}`}
        description={`${seo.description}`}
        canonical={`https://livastudio.co.uk/${seo.canonical}`}
        openGraph={{
          url: `https://livastudio.co.uk/${seo.url}`,
          title: `${seo.title}`,
          description: `${seo.description}`,
          images: [
            {
              url: "https://raw.githubusercontent.com/pawelkom88/liva-studio/main/logo_readme.jpg",
              width: 800,
              height: 600,
              alt: "Liva Studio ",
              type: "image/webp",
            },
            {
              url: "https://raw.githubusercontent.com/pawelkom88/liva-studio/main/logo_readme.jpg",
              width: 900,
              height: 800,
              alt: "Liva Studio ",
              type: "image/webp",
            },
          ],
          siteName: "Liva Studio ",
        }}
      />
      <Script
      id="json"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      >
      </Script>
    </>
  );
}
