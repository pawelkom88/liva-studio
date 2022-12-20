import Link from "next/link";

export default function NavLink(props) {
  const { name, href, ariaLabel, title, fontBold, tagType } = props;

  return (
    <>
      {tagType === "anchor" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          title={title}
          className={`${
            fontBold ? "font-bold" : "font-medium"
          } uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]`}>
          {name}
        </a>
      ) : (
        <Link
          href={href}
          aria-label={ariaLabel}
          title={title}
          className={`${
            fontBold ? "font-bold" : "font-medium"
          } uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]`}>
          {name}
        </Link>
      )}
    </>
  );
}
