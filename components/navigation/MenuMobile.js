import Link from "next/link";

export function MenuMobile({ setIsOpen }) {
  return (
    <div className="fixed inset-0 z-40 w-full h-full flex justify-center items-center bg-[color:var(--secondary-clr)] opacity-100 duration-700">
      <nav className="w-full  flex flex-col text-white text-center text-xl font-light space-y-3">
        <ul className="space-y-4 overflow-hidden">
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
          <li onClick={() => setIsOpen(false)} className="fade-in-link">
            <Link
              href="/offer"
              aria-label="Our offer"
              title="Our offer"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Offer
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
          <li onClick={() => setIsOpen(false)} className="fade-in-link ">
            <Link
              href="/portfolio"
              aria-label="Our portfolio"
              title="Our portfolio"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Portfolio
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />

          <li onClick={() => setIsOpen(false)} className="fade-in-link">
            <Link
              href="/about-us"
              aria-label="About us"
              title="About us"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              About us
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
          <li onClick={() => setIsOpen(false)} className="fade-in-link">
            <Link
              href="/contact"
              aria-label="Contact"
              title="Contact"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Contact
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
        </ul>
      </nav>
    </div>
  );
}
