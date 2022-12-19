import FooterDescription from "./FooterDescription";
import ContactDetails from "./ContactDetails";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-[var(--teriary-clr)] px-4 pt-16 mx-auto mt-24  md:px-24 lg:px-8 border-t-2">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <FooterDescription />
        <ContactDetails />
        <SocialMedia />
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <p className="text-sm text-[color:var(--primary-clr)]">
          © Copyright {date} Liva Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
