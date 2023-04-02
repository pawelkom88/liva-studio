import { NextSeo } from "next-seo";

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

  return (
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
  );
}
