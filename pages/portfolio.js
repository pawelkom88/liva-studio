import useMatchMedia from "@hooks/useMatchMedia";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Wrapper from "@components/UI/wrapper/Wrapper";
import { images } from "@helpers/images";
import { portfolioCategories } from "@helpers/data";

const slides = images.map(({ original, title }) => ({
  src: original,
  alt: title,
  width: 3840,
  height: 2560,
}));

export default function Portfolio() {
  const [category, setCategory] = useState(slides);
  const [isActive, setIsActive] = useState(0);
  const { matches } = useMatchMedia("(max-width: 1024px)");
  const [index, setIndex] = useState(-1);
  const [isBlurred, setisBlurred] = useState(true);

  function getCategory(selectedCategory) {
    let filteredImages;

    if (selectedCategory === "All") {
      filteredImages = images;
    } else {
      filteredImages = images.filter(({ category }) => category === selectedCategory);
    }
    console.log(filteredImages);
    setCategory(filteredImages);
  }

  function handleActiveCategory(id) {
    setIsActive(id);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBlurred(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function openFullMode(index) {
    setIndex(index);
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
              } inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-[color:var(--primary-clr)] bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-[color:var(--primary-clr)]`}>
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="my-8">
        {matches ? (
          <Wrapper>
            <Gallery
              images={category}
              onClick={openFullMode}
              enableImageSelection={false}
              thumbnailStyle={isBlurred && { filter: "blur(10px)" }}
            />
            <Lightbox
              slides={category}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </Wrapper>
        ) : (
          <Wrapper>
            <Gallery
              images={category}
              onClick={openFullMode}
              enableImageSelection={false}
              rowHeight={200}
              thumbnailStyle={isBlurred && { filter: "blur(10px)" }}
            />
            <Lightbox
              slides={category}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </Wrapper>
        )}
      </div>
    </>
  );
}
