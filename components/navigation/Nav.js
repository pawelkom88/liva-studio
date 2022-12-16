import { NavMobile } from "./NavMobile";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="px-4 py-2 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <nav className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Pricing
            </Link>
          </li>
        </ul>
        <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src="/assets/images/logo.jpg"
            alt="Liva Studio logo"></Image>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              href="/"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Sign in"
              title="Sign in"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Sign up"
              title="Sign up"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Sign up
            </Link>
          </li>
        </ul>
        <NavMobile />
      </nav>
    </div>
  );
}
