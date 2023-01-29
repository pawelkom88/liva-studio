import { useEffect, useRef, useState } from "react";

export default function useCounter(number, time) {
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
  return { elementRef, counter };
}
