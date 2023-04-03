export default function Modal({ children, onModalClose, nextSlide, previousSlide }) {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        onModalClose(false);
      }}
      className="fixed inset-0 z-30 bg-black">
      <div className="flex-center overflow-hiddenpx-4 fixed inset-0 z-20 mx-2">
        {children}
        <button
          className="background-transparent absolute top-20 right-5 sm:top-10 sm:right-10"
          type="button"
          onClick={() => onModalClose(false)}>
          <svg width={35} height={35} fill="#fff" viewBox="0 0 24 24" id="close">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
      </div>

      <span
        onClick={e => {
          e.stopPropagation();
          previousSlide();
        }}
        className="arrow-left z-80 absolute bottom-20 left-20 sm:top-[50%]"></span>
      <span
        onClick={e => {
          e.stopPropagation();
          nextSlide();
        }}
        className="arrow-right z-80 absolute bottom-20 right-20 sm:top-[50%]"></span>
    </div>
  );
}
