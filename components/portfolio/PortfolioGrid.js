import useMatchMedia from "@hooks/useMatchMedia";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Wrapper from "@components/UI/wrapper/Wrapper";

export default function PortfolioGrid({ category }) {
  const [isBlurred, setIsBlurred] = useState(true);
  const { matches } = useMatchMedia("(max-width: 1024px)");
  const [index, setIndex] = useState(-1);

  function openFullMode(index) {
    setIndex(index);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-8">
      {matches ? (
        <Wrapper>
          <Gallery
            images={category}
            onClick={openFullMode}
            enableImageSelection={false}
            thumbnailStyle={
              isBlurred && {
                filter: "blur(10px)",
              }
            }
          />
          <Lightbox slides={category} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      ) : (
        <Wrapper>
          <Gallery
            images={category}
            onClick={openFullMode}
            enableImageSelection={false}
            rowHeight={200}
            thumbnailStyle={
              isBlurred && {
                filter: "blur(10px)",
              }
            }
          />
          <Lightbox slides={category} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      )}
    </div>
  );
}
