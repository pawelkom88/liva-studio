import useMatchMedia from "@hooks/useMatchMedia";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Wrapper from "@components/UI/wrapper/Wrapper";

export default function PortfolioGrid({ category }) {
  const { matches } = useMatchMedia("(max-width: 1024px)");
  const [index, setIndex] = useState(-1);

  function openFullMode(index) {
    setIndex(index);
  }

  return (
    <div className="my-8">
      {matches ? (
        <Wrapper>
          <Gallery images={category} onClick={openFullMode} enableImageSelection={false} />
          <Lightbox slides={category} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      ) : (
        <Wrapper>
          <Gallery
            images={category}
            onClick={openFullMode}
            enableImageSelection={false}
            rowHeight={250}
            margin={5}
            tileViewportStyle={() => {
              return {
                overflow: "hidden",
              };
            }}
          />
          <Lightbox slides={category} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </Wrapper>
      )}
    </div>
  );
}
