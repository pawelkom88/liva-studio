import Link from "next/link";

export default function Button({ children, styles }) {
  return (
    <Link
      href="#"
      className={`${styles?.background} ${styles?.border} ${styles?.textHover} mt-8 inline-block  px-12 py-3 text-sm text-white font-bold hover:bg-transparent border hover:border  focus:outline-none focus:ring active:text-indigo-500 uppercase`}>
      {children}
    </Link>
  );
}
