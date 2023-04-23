import FooterDescription from "./FooterDescription";
import ContactDetails from "./ContactDetails";
import SocialMedia from "./SocialMedia";
import { currentYear } from "constants/constants";

export default function Footer() {
  return (
    <footer className="mx-auto border-t-2 bg-[var(--teriary-clr)] px-4  pt-4 md:px-24 lg:px-8">
      <div className="row-gap-6 mx-auto my-8 grid items-center gap-10 sm:max-w-xl sm:grid-cols-2 md:max-w-full lg:max-w-screen-xl lg:grid-cols-4">
        <FooterDescription />
        <ContactDetails />
        <SocialMedia />
      </div>
      <div className="border-t pt-4">
        <p className="text-center text-sm text-[color:var(--primary-clr)]">
          © Copyright {currentYear} Liva Studio. All rights reserved.
          <small className="my-2 block">
            Made with{" "}
            <svg className="inline mb-[2px]" width="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="heart">
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  fill="#dd2e44"
                  d="M3.067 25.68c0 8.799 12.184 12.06 15.933 1.874 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 3.999 19 3.999S3.067 16.12 3.067 25.68"></path>
              </g>
            </svg>{" "}
            by Paw
          </small>
        </p>
      </div>
    </footer>
  );
}
