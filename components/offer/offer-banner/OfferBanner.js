import useCounter from "@hooks/useCounter";

export default function OfferBanner({ children, number, time, text }) {
  const { elementRef, counter } = useCounter(number, time);

  return (
    <div className="flex-center flex-col">
      {children}
      <span className="block text-white uppercase sm:text-sm md:text-lg font-bold tracking-wide my-2">
        {counter}
      </span>
      <span
        ref={elementRef}
        className="block text-white text-center uppercase sm:text-sm md:text-lg tracking-wide">
        {text}
      </span>
    </div>
  );
}
