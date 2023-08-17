import { useState } from "react";
import PortfolioGrid from "@components/portfolio/PortfolioGrid";
import PageSeo from "../seo/PageSeo";
import { portfolioCategories } from "@helpers/data";
import { shuffleArray, staticImages } from "@helpers/images";
import { btnStyles } from "@helpers/constants";
import { portfolioSeo } from "../seo/seo";
import { createClient } from "contentful";

export default function Portfolio({ assets }) {
  const filteredByCategoryFetchedImages = assets.filter(contentfulImages =>
    portfolioCategories.find(category => category.name === contentfulImages.category)
  );

  const portfolioImages = [...filteredByCategoryFetchedImages, ...staticImages];

  const [category, setCategory] = useState(shuffleArray(portfolioImages));
  const [isActive, setIsActive] = useState(8);

  function getCategory(selectedCategory) {
    let filteredImages;

    if (selectedCategory === "All") {
      filteredImages = portfolioImages;
    } else {
      filteredImages = portfolioImages.filter(({ category }) => category === selectedCategory);
    }
    setCategory(filteredImages);
  }

  function handleActiveCategory(id) {
    setIsActive(id);
  }

  return (
    <div>
      <PageSeo seo={portfolioSeo} />
      <div
        style={{ animation: "fadeIn .7s ease-in-out" }}
        className="flex-center mx-auto w-full flex-wrap py-2">
        {portfolioCategories?.map(category => {
          return (
            <button
              key={category.id}
              onClick={() => {
                handleActiveCategory(category.id);
                getCategory(category.name);
              }}
              className={`${
                isActive === category.id
                  ? "ease rounded-md bg-[color:var(--secondary-clr)] font-bold text-white transition-colors duration-300"
                  : ""
              } ${btnStyles}`}>
              {category.name}
            </button>
          );
        })}
      </div>
      <PortfolioGrid categoryImages={category} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getAssets("2PqFR31aw7dk3a6lKQcNYC");

  const contentfulImages = response?.items.map(asset => {
    const category = asset.fields.description ?? "";
    const url = `https:${asset.fields.file.url}`;
    const width = asset.fields.file.details.image.width;
    const height = asset.fields.file.details.image.height;

    const image = {
      src: url,
      width,
      height,
      category,
    };

    return image;
  });

  return {
    props: {
      assets: contentfulImages,
    },
    revalidate: 60,
  };
}
