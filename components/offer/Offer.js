export default function Offer({ order }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className={`${order.first} lg:pr-10`}>
          <h5 className="mb-4 text-4xl font-extrabold font-steelfish leading-none">
            The quick, brown fox jumps over a lazy dog
          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae explicabo. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">social</div>
        </div>
        <div className={`${order.second}`}>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
