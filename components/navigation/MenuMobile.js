import Link from "next/link";

export function MenuMobile({ setIsMenuOpen }) {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="p-5 bg-white border rounded shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Company
              </span>
            </Link>
          </div>
          <div>
            <button
              aria-label="Close Menu"
              title="Close Menu"
              className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(false)}>
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav>
          <ul className="space-y-4">
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
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
