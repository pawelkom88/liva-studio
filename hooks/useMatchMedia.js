import { useState, useEffect } from "react";

export default function useMatchMedia(query) {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    if (matchQueryList.matches === matches) {
      setMatches(matchQueryList.matches);
    }

    function handleChange() {
      setMatches(matchQueryList.matches);
    }

    matchQueryList.addEventListener("change", handleChange);
    return () => matchQueryList.removeEventListener("change", handleChange);
  }, [query, matches]);

  return { matches };
}

// "(max-width: 860px)"
