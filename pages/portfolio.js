import PortfolioGrid from "@components/portfolio/PortfolioGrid";
import { useState } from "react";
import { portfolioCategories } from "@helpers/data";
import { images } from "@helpers/images";

const slides = images.map(({ src, title }) => ({
  src,
  width: 3840,
  height: 2560,
  alt: title,
}));

const btnStyles =
  "inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-[color:var(--primary-clr)] bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base hover:border-[color:var(--primary-clr)]";

export default function Portfolio() {
  const [category, setCategory] = useState(slides);
  const [isActive, setIsActive] = useState(0);

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
      <div className="flex-center flex-wrap w-full mx-auto py-2">
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
                  ? "text-[color:var(--secondary-clr)] font-bold transition-colors duration-300 ease"
                  : ""
              } ${btnStyles}`}>
              {category.name}
            </button>
          );
        })}
      </div>
      <PortfolioGrid category={category} />
    </>
  );
}
