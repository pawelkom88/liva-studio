import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--teriary-clr)] px-4 pt-16 mx-auto mt-24  md:px-24 lg:px-8 border-t-2">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <div className="sm:col-span-2">
          <Image
            className="rounded-full"
            width={75}
            height={75}
            src="/assets/images/logo.jpg"
            alt="Liva Studio logo"
          />
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm hover:teprimary-[color:var(--secondary-clr)]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm hover:text-[color:var(--secondary-primary)]">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-md">
          <p className="text-base font-bold tracking-wide hover:text-[color:var(--primary-clr)]">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 hover:text-[color:var(--primary-clr)]">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[color:var(--secondary-clr)]">
              07412556
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 hover:text-[color:var(--primary-clr)]">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[color:var(--secondary-clr)]">
              info@livastudio.co.uk
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 hover:text-[color:var(--primary-clr)]">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[color:var(--secondary-clr)]">
              address
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide hover:text-[color:var(--primary-clr)]">
            Social media
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/livastudio_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
              <svg
                role="img"
                aria-labelledby="InstagramDesc Instagram"
                viewBox="0 0 30 30"
                fill="var(--primary-clr)"
                className="h-10">
                <title>Instagram icon</title>
                <desc id="Instagram">Click here to see our photos on Instagram</desc>
                <circle cx="15" cy="15" r="4" />

                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/livastudio1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
              <svg
                role="img"
                aria-labelledby="FacebookDesc Facebook"
                viewBox="0 0 24 24"
                fill="var(--primary-clr)"
                className="h-8">
                <title>Facebook icon</title>
                <desc id="Facebook">Click here to visit our Facebook page</desc>
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-md text-[color:var(--primary-clr)]">
            Follow us on social media to stay up to date !
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <p className="text-sm text-[color:var(--primary-clr)]">
          © Copyright 2022 Liva Studio. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href=""
              className="text-sm text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
