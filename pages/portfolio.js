import useMatchMedia from "@hooks/useMatchMedia";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Wrapper from "@components/wrapper/Wrapper";
import { images } from "@helpers/images";

const slides = images.map(({ original, title }) => ({
  src: original,
  alt: title,
  width: 3840,
  height: 2560,
}));

export default function Portfolio() {
  const { matches } = useMatchMedia("(max-width: 1024px)");
  const [index, setIndex] = useState(-1);
  const [isBlurred, setisBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBlurred(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function handleClick(index) {
    setIndex(index);
  }

  return (
    <div className="my-8">
      {matches ? (
        <Wrapper>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            thumbnailStyle={isBlurred && { filter: "blur(10px)" }}
          />
          <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      ) : (
        <Wrapper>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            rowHeight={200}
            thumbnailStyle={isBlurred && { filter: "blur(10px)" }}
          />
          <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      )}
    </div>
  );
}
