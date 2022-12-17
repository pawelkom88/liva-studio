import { NavMobile } from "./NavMobile";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-4 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <nav className="relative flex justify-between items-center lg:justify-center lg:space-x-16 px-4">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Offer
            </Link>
          </li>

          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Portfolio
            </Link>
          </li>
        </ul>
        <Link className="hidden lg:flex-center" href="/" aria-label="Company" title="Company">
          <Image
            className="rounded-full"
            width={75}
            height={75}
            src="/assets/images/logo.jpg"
            alt="Liva Studio logo"
          />
        </Link>
        <Link className="hidden large:block" href="/">
          <h1 className="heading-styles text-2xl tracking-widest">Liva Studio</h1>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Contact
            </Link>
          </li>
        </ul>
        <NavMobile />
      </nav>
    </div>
  );
}
