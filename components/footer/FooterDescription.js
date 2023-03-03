import Image from "next/image";

export default function FooterDescription({}) {
  return (
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
          Based in Bristol, England, Liva Studio is a photography brand specialising in newborn,
          maternity, and wedding photography. We’re obsessed with documenting and preserving life’s
          special moments by combining beautiful pictures and cutting-edge technology to create
          blissful memories for our clients.
        </p>
      </div>
    </div>
  );
}
