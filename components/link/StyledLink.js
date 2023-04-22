import Link from "next/link";

export default function StyledLink({ children, href }) {
  return (
    <div className="text-right">
      <Link
        className="ml-8 font-semibold underline hover:text-[color:var(--secondary-clr)]"
        href={`/${href}`}>
        {children}
      </Link>
      <svg className="ml-2 inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
      </svg>
    </div>
  );
}
