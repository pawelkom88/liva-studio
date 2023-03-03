import FooterDescription from "./FooterDescription";
import ContactDetails from "./ContactDetails";
import SocialMedia from "./SocialMedia";
import { currentYear } from "constants/constants";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 border-t-2 bg-[var(--teriary-clr)] px-4  pt-16 md:px-24 lg:px-8">
      <div className="row-gap-6 mx-auto mb-8 grid gap-10 sm:max-w-xl sm:grid-cols-2 md:max-w-full lg:max-w-screen-xl lg:grid-cols-4">
        <FooterDescription />
        <ContactDetails />
        <SocialMedia />
      </div>
      <div className="mx-auto flex flex-col-reverse justify-between border-t pt-5 pb-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:flex-row">
        <p className="text-sm text-[color:var(--primary-clr)]">
          © Copyright {currentYear} Liva Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
