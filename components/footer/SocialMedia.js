export default function SocialMedia({}) {
  return (
    <div>
      <span className="text-base font-bold tracking-wide hover:text-[color:var(--primary-clr)]">
        Social media
      </span>
      <div className="flex items-center mt-1 space-x-3">
        <a
          href="https://www.instagram.com/livastudio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          <svg
            role="img"
            aria-labelledby="InstagramDesc"
            viewBox="0 0 30 30"
            fill="var(--primary-clr)"
            className="h-10">
            <title>Instagram icon</title>
            <desc id="InstagramDesc">Click here to see our photos on Instagram</desc>
            <circle cx="15" cy="15" r="4" />

            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
          </svg>
        </a>
        <a
          href="https://facebook.com/livastudio1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--primary-clr)] transition-colors duration-300 hover:text-[color:var(--secondary-clr)]">
          <svg
            role="img"
            aria-labelledby="FacebookDesc"
            viewBox="0 0 24 24"
            fill="var(--primary-clr)"
            className="h-8">
            <title>Facebook icon</title>
            <desc id="FacebookDesc">Click here to visit our Facebook page</desc>
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
      <p className="mt-4 text-md text-[color:var(--primary-clr)]">
        Follow us on social media to stay up to date !
      </p>
    </div>
  );
}
