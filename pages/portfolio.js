import { useState } from "react";
import PortfolioGrid from "@components/portfolio/PortfolioGrid";
import PageSeo from "../seo/PageSeo";
import { portfolioCategories } from "@helpers/data";
import {
  shuffleArray,
  babiesPhotosCategoryImages,
  boudoirPhotosCategoryImages,
  // maternityPhotosCategoryImages,
  lifestylePhotosCategoryImages,
  newbornPhotosCategoryImages,
  weddingPhotosCategoryImages,
  portraitPhotosCategoryImages,
} from "@helpers/images";
import { portfolioSeo } from "../seo/seo";
import { createClient } from "contentful";

const btnStyles =
  "inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-[color:var(--primary-clr)] bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base hover:border-[color:var(--primary-clr)]";

export default function Portfolio({ assets }) {
  const filteredByCategoryFetchedImages = assets.filter(contentfulImages =>
    portfolioCategories.find(category => category.name === contentfulImages.category)
  );

  const portfolioImages = [
    ...filteredByCategoryFetchedImages,
    ...babiesPhotosCategoryImages,
    ...boudoirPhotosCategoryImages,
    // ...maternityPhotosCategoryImages,
    ...lifestylePhotosCategoryImages,
    ...newbornPhotosCategoryImages,
    ...portraitPhotosCategoryImages,
    ...weddingPhotosCategoryImages,
  ];

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
    <>
      <PageSeo seo={portfolioSeo} />
      <div className="flex-center mx-auto w-full flex-wrap py-2">
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
                  ? "ease border-b border-[color:var(--secondary-clr)] font-bold text-[color:var(--secondary-clr)] transition-colors duration-300"
                  : ""
              } ${btnStyles}`}>
              {category.name}
            </button>
          );
        })}
      </div>
      <PortfolioGrid categoryImages={category} />
    </>
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

    const image = {
      src: url,
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
