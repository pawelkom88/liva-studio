import Link from "next/link";

export function MenuMobile() {
  return (
    <div className="fixed inset-0 z-40 w-full h-full flex justify-center items-center bg-[color:var(--secondary-clr)] opacity-100 duration-700">
      <nav className="w-full  flex flex-col text-white text-center text-xl font-light space-y-3">
        <ul className="space-y-4 overflow-hidden">
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />

          <li className="fade-in-link">
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Product
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
          <li className="fade-in-link ">
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Features
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />

          <li className="fade-in-link">
            <Link
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Pricing
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />

          <li className="fade-in-link">
            <Link
              href="/"
              aria-label="About us"
              title="About us"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              About us
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />

          <li className="fade-in-link">
            <Link
              href="/"
              aria-label="Sign in"
              title="Sign in"
              className="text-2xl tracking-wider text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              Sign in
            </Link>
          </li>
          <hr className="w-3/4 mb-5 mx-auto opacity-70 border-[color:var(--teriary-clr)]" />
        </ul>
      </nav>
    </div>
  );
}
