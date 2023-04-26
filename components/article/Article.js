export default function Article({ heading = "", children, important = false }) {
  const headingImportance =
    heading && !important ? (
      <h2 className="heading-styles my-8 text-center">{heading}</h2>
    ) : (
      <h1 className="heading-styles my-8 text-center">{heading}</h1>
    );

  return (
    <article>
      {headingImportance}
      <p className="text-md mx-auto max-w-readable indent-3 text-gray-900 lg:text-lg">{children}</p>
    </article>
  );
}
