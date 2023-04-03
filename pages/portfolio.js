import { useState } from "react";
import PortfolioGrid from "@components/portfolio/PortfolioGrid";
import PageSeo from "../seo/PageSeo";
import { portfolioCategories } from "@helpers/data";
import { images } from "@helpers/images";
import { portfolioSeo } from "../seo/seo";

const btnStyles =
  "inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-[color:var(--primary-clr)] bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base hover:border-[color:var(--primary-clr)]";

export default function Portfolio() {
  const [category, setCategory] = useState(images);
  const [isActive, setIsActive] = useState(8);

  function getCategory(selectedCategory) {
    let filteredImages;

    if (selectedCategory === "All") {
      filteredImages = images;
    } else {
      filteredImages = images.filter(({ category }) => category === selectedCategory);
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
        {portfolioCategories.map(category => {
          return (
            <button
              onClick={() => {
                handleActiveCategory(category.id);
                getCategory(category.name);
              }}
              key={category.id}
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
