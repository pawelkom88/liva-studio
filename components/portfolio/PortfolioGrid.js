import { useState } from "react";
import Modal from "../UI/modal/Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

export default function PortfolioGrid({ categoryImages }) {
  const [activeImage, setActiveImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function goToNextSlide() {
    activeImage === categoryImages.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);
  }

  function goToPrevSlide() {
    activeImage === 0 ? setActiveImage(categoryImages.length - 1) : setActiveImage(activeImage - 1);
  }

  return (
    <div className="z-100 relative">
      {showModal && (
        <Modal onModalClose={setShowModal} nextSlide={goToNextSlide} previousSlide={goToPrevSlide}>
          <Image
            src={categoryImages[activeImage].src || 0}
            width={600}
            height={620}
            alt="portfolio image"
          />
        </Modal>
      )}

      <div className=" mx-auto max-w-7xl p-4 md:p-8">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="10px">
            {categoryImages.map((image, index) => {
              return (
                <div
                  onClick={() => {
                    setShowModal(true);
                    setActiveImage(index);
                  }}
                  key={image.src}
                  className="gallery">
                  <Image
                    className="w-full cursor-pointer"
                    src={image.original}
                    width={300}
                    height={500}
                    alt={`portfolio image ${index}`}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
