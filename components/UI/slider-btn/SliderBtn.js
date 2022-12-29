import React from "react";

export default function SliderBtn({ onClick, aria, iconDirection }) {
  return (
    <button
      onClick={onClick}
      aria-label={aria}
      className={` rounded-full border border-[color:var(--secondary-clr)] bg-[color:var(--secondary-clr)] p-4 text-[color:var(--secondary-clr)] text-gray-100 hover:bg-[color:var(--primary-clr)] hover:text-[color:var(--secondary-clr)]`}>
      {iconDirection === "previous" ? (
        <svg
          className="h-5 w-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
}
