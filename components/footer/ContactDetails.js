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
          className="underline transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          07401354839
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 hover:text-[color:var(--primary-clr)]">Email:</p>
        <a
          href="mailto:Contact@livastudio.co.uk"
          aria-label="Our email"
          title="Our email"
          className="underline transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          Contact@livastudio.co.uk
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 hover:text-[color:var(--primary-clr)]">Address: </p>
        <a
          href="https://www.google.com/maps/place/LIVA+Studio/@51.4213539,-2.5935657,15z/data=!4m6!3m5!1s0x48718d292ff8e771:0x660c9c141ff58366!8m2!3d51.4213539!4d-2.5935657!16s%2Fg%2F11k4364qwx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="underline transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          Wallingford Rd, BS4 1SW, Bristol
        </a>
      </div>
    </div>
  );
}
