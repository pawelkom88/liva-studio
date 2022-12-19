import { MenuMobile } from "./MenuMobile";

export default function NavMobile({ isOpen, setIsOpen }) {
  const genericHamburgerLine = `h-[2px] w-6 my-[1px] bg-[color:var(--primary-clr)] transition ease transform duration-300`;

  return (
    <nav className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        className="relative flex-center flex-col h-12 w-12 group z-50"
        onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-[3px] opacity-80 group-hover:opacity-100 bg-white"
              : "opacity-80 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-[6px] opacity-80 group-hover:opacity-100 bg-white"
              : "opacity-80 group-hover:opacity-100"
          }`}
        />
      </button>
      {isOpen && <MenuMobile setIsOpen={setIsOpen} />}
    </nav>
  );
}
