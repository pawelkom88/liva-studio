export default function ContactDetails({}) {
  return (
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
  );
}
