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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p className="mt-4 text-sm hover:text-[color:var(--secondary-primary)]">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
    </div>
  );
}
