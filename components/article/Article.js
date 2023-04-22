export default function Article({ heading = "", children }) {
  return (
    <article>
      {heading ? <h2 className="heading-styles mb-8 mt-12 text-center">{heading}</h2> : ""}
      <p className="text-md mx-auto max-w-readable indent-5 text-gray-900 lg:text-lg">{children}</p>
    </article>
  );
}
