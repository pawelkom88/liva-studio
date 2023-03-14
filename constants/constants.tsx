interface BtnStyles {
  background: string;
  border: string;
  textHover: string;
}

export const btnStyles: BtnStyles = {
  background: "bg-[color:var(--secondary-clr)]",
  border: "border-[color:var(--secondary-clr)]",
  textHover: "hover:text-[color:var(--secondary-clr)]",
};

export const currentYear: number = new Date().getFullYear();

interface MobileMenuLinks {
  id: number;
  href: string;
  aria: string;
  title: string;
  className: string;
  name: string;
  isInternal: true | false;
}

const MobileMenuLinksStyles: string =
  "transition-colors duration-200 hover:text-deep-purple-accent-400";

export const menuMobileLinks: MobileMenuLinks[] = [
  {
    id: 1,
    href: "/offer",
    aria: "Our offer",
    title: "Our offer",
    className: MobileMenuLinksStyles,
    name: "Offer",
    isInternal: true,
  },
  {
    id: 2,
    href: "/portfolio",
    aria: "Our portfolio",
    title: "Our portfolio",
    className: MobileMenuLinksStyles,
    name: "Portfolio",
    isInternal: true,
  },
  {
    id: 3,
    href: "/about-us",
    aria: "About us",
    title: "About us",
    className: MobileMenuLinksStyles,
    name: "About us",
    isInternal: true,
  },
  {
    id: 3,
    href: "/contact",
    aria: "Contact",
    title: "Contact",
    className: MobileMenuLinksStyles,
    name: "Contact",
    isInternal: true,
  },
  {
    id: 4,
    href: "/blog",
    aria: "Blog",
    title: "Blog",
    className: MobileMenuLinksStyles,
    name: "Blog",
    isInternal: true,
  },
  {
    id: 5,
    href: "/",
    aria: "Client space",
    title: "Client space",
    className: MobileMenuLinksStyles,
    name: "Client space",
    isInternal: false,
  },
];

export const btnStylesGoldVariant: string =
  "bg-white text-[var(--primary-clr)] hover:bg-transparent hover:border-white hover:text-white";
export const btnStylesOtherVariant: string =
  "bg-[var(--secondary-clr)] text-white hover:bg-transparent hover:border-[var(--primary-clr)] hover:text-[var(--primary-clr)]";

export const btnStylesCommonStyles: string =
  "w-1/2 mx-auto px-8 py-3 font-semibold relative overflow-hidden bg-[color:var(--primary-clr)] hover:bg-[color:var(--secondary-clr)] text-white border-2 border-transparent transition-all";
