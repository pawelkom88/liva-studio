import { useEffect, useState, useRef } from "react";

export default function OfferBanner({ children, number, time, text }) {
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const [counter, setCounter] = useState(0);

  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(elementRef.current);
  }, []);

  useEffect(() => {
    let timer;

    if (myElementIsVisible) {
      timer = setTimeout(() => {
        if (counter === number) {
          return;
        }

        setCounter(prevCount => prevCount + 1);
      }, time);
    }

    return () => clearTimeout(timer);
  }, [counter, myElementIsVisible, number, time]);

  return (
    <div className="flex-center flex-col">
      {children}
      <span className="my-2 block font-bold uppercase tracking-wide text-white sm:text-sm md:text-lg">
        {counter}
      </span>
      <span
        ref={elementRef}
        className="block text-center uppercase tracking-wide text-white sm:text-sm md:text-lg">
        {text}
      </span>
    </div>
  );
}
