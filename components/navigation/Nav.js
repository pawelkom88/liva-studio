import { useState } from "react";
import NavMobile from "./NavMobile";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-4 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <nav className="relative flex justify-between items-center lg:justify-center lg:space-x-16 px-4">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/offer"
              aria-label="Our offer"
              title="Our offer"
              className="font-bold uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Offer
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              aria-label="Our portfolio"
              title="Our portfolio"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Portfolio
            </Link>
          </li>
        </ul>
        <Link
          className="hidden lg:flex-center"
          href="/"
          aria-label="Company logo"
          title="Company logo">
          <Image
            className="rounded-full"
            width={75}
            height={75}
            src="/assets/images/logo.jpg"
            alt="Liva Studio logo"
          />
        </Link>
        <Link className="hidden large:block" href="/">
          <h1
            onClick={() => setIsOpen(false)}
            className={`${
              isOpen ? "text-white" : "text-[color:var(--primary-clr)]"
            } relative z-50 heading-styles text-2xl tracking-widest transition-colors ease-in-out duration-200`}>
            Liva Studio
          </h1>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/about-us"
              aria-label="About us"
              title="About us"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-label="Contact us"
              title="Contact us"
              className="font-medium uppercase tracking-wide text-[color:var(--primary-clr)] transition-colors duration-200 hover:text-[color:var(--secondary-clr)]">
              Contact
            </Link>
          </li>
        </ul>
        <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
}
