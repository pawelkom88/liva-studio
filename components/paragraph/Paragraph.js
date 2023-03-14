export default function Paragraph({ children }) {
  return (
    <p className="my-2 indent-5 text-base text-[color:var(--primary-clr)] md:text-lg">{children}</p>
  );
}
