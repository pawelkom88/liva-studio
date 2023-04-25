import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Image from "next/image";
import CustomImage from "../custom-image/CustomImage";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function PortfolioGrid({ categoryImages }) {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const thumbnailsRef = useRef(null);

  return (
    <div className="z-100 relative">
      <Lightbox
        plugins={[Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
        index={activeImage}
        open={showModal}
        close={() => setShowModal(false)}
        slides={categoryImages.map(({ src }) => src)}
        render={{ slide: CustomImage }}
      />

      <div className="mx-auto max-w-7xl p-4 md:p-8">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {categoryImages.map(({ id, category, width, height, src, blurDataURL }, idx) => {
            return (
              <div
                onClick={() => {
                  setActiveImage(idx);
                  setShowModal(true);
                }}
                key={id}
                className="gallery ">
                <Image
                  className="cursor-pointer object-cover"
                  src={src}
                  width={width}
                  height={height}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
                  alt={`image ${id} - ${category}`}
                />
              </div>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
