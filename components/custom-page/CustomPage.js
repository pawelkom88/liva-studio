import useRedirect from "@hooks/useRedirect";

export default function NotFound({ message, time }) {
  const { countdown } = useRedirect(time);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[color:var(--primary-clr)]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[color:var(--secondary-clr)] px-2 text-sm rounded rotate-12 absolute">
        {message}
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[color:var(--secondary-clr)] group active:text-[color:var(--primary-clr)] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[color:var(--secondary-clr)] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[color:var(--primary-clr)] border border-current">
            Redirect in : <span>{countdown}</span>
          </span>
        </a>
      </button>
    </main>
  );
}
