export default function ContactDetails({}) {
  return (
    <div className="text-md space-y-2">
      <p className="text-base font-bold tracking-wide hover:text-[color:var(--primary-clr)]">
        Contacts
      </p>
      <div className="flex">
        <p className="mr-1 hover:text-[color:var(--primary-clr)]">Phone:</p>
        <a
          href="tel:07401354839"
          aria-label="Our phone"
          title="Our phone"
          className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          07401354839
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 hover:text-[color:var(--primary-clr)]">Email:</p>
        <a
          href="mailto:Contact@livastudio.co.uk"
          aria-label="Our email"
          title="Our email"
          className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          Contact@livastudio.co.uk
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 hover:text-[color:var(--primary-clr)]">Address: link to google maps</p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          address
        </a>
      </div>
    </div>
  );
}
