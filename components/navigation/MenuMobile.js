import Link from "next/link";
import { menuMobileLinks } from "constants/constants";

const horizontalLine = (
  <hr className="mx-auto mb-5 w-3/4 border-[color:var(--teriary-clr)] opacity-70" />
);

export function MenuMobile({ setIsOpen }) {
  return (
    <div className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-[color:var(--primary-clr)] opacity-100 duration-700">
      <nav className="flex  w-full flex-col space-y-3 text-center text-xl font-light text-white">
        <ul
          className="space-y-4 overflow-hidden text-2xl tracking-wider text-white
">
          {menuMobileLinks.map(link => {
            return (
              <>
                {horizontalLine}
                <li key={link.id} onClick={() => setIsOpen(false)} className="fade-in-link">
                  {!link.isInternal ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.href}
                      aria-label={link.aria}
                      title={link.title}
                      className={link.className}>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      aria-label={link.aria}
                      title={link.title}
                      className={link.className}>
                      {link.name}
                    </Link>
                  )}
                </li>
              </>
            );
          })}
          {horizontalLine}
        </ul>
      </nav>
    </div>
  );
}
